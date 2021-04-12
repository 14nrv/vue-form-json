import matchers from 'jest-vue-matcher'
import { mount, createLocalVue, createWrapper } from '@vue/test-utils'
import { slug } from '@/helpers'
import { extendRules, flush } from '@/helpers/test'
import { ValidationProvider } from 'vee-validate'
import Form from '@/components/Form'
import Vue from 'vue'

const fields = [
  {
    is: 'CustomField',
    attr: {
      placeholder: 'the placeholder',
      name: 'customField'
    }
  }
]

extendRules()

const localVue = createLocalVue()
localVue.component('ValidationProvider', ValidationProvider)
localVue.filter('slugify', str => slug(str))

const FORM_NAME = 'testFormName'
const $inputSubmit = 'input[type=submit]'
const $customField = 'input[name=customField]'

const type = (text, input, event = 'input') => {
  const node = wrapper.find(input)
  node.setValue(text)
  node.trigger(event)
}

let wrapper

const CustomField = Vue.component('CustomField', {
  props: {
    item: {
      type: Object,
      required: true
    },
    error: {
      type: String,
      default: null
    }
  },
  mounted () {
    this.item.value && (this.$emit('input', this.item.value))
  },
  methods: {
    handleClick (ev) {
      this.$emit('input', ev.target.value)
    }
  },
  render (h) {
    return <div><input vOn:input={this.handleClick} attrs={this.item.attr} /><p class="is-danger">{ this.error }</p></div>
  }
})

const setup = ({
  formFields = fields
} = {}) => {
  wrapper = mount(Form, {
    localVue,
    propsData: {
      camelizePayloadKeys: false,
      formFields,
      formName: FORM_NAME,
      components: { CustomField }
    }
  })
  expect.extend(matchers(wrapper))
  return { wrapper }
}

describe('dynamic component', () => {
  it('has a field', async () => {
    setup()

    expect($customField).toBeADomElement()
  })

  it('binds attrs', () => {
    setup()

    expect($customField).toHaveAttribute('placeholder', 'the placeholder')
    expect($customField).toHaveAttribute('name', 'customField')
  })

  it('handles rules', async () => {
    setup({
      formFields: [{
        ...fields[0],
        rules: {
          is_not: 'test'
        },
        value: 'test'
      }]
    })
    await flush()

    expect('p.is-danger').toHaveText('customField is not valid.')
  })

  it('handles dynamic field passed as component props', async () => {
    const { wrapper } = setup()
    const rootWrapper = createWrapper(wrapper.vm.$root)
    wrapper.vm.$refs.observer.validate = jest.fn(() => true)
    await flush()

    expect($inputSubmit).toHaveAttribute('disabled', 'disabled')

    type('test', $customField)
    await flush()

    expect($inputSubmit).toHaveAttribute('disabled', undefined)

    wrapper.find($inputSubmit).trigger('submit')
    await flush()

    expect(rootWrapper).toEmitWith('formSubmitted', {
      formName: FORM_NAME,
      values: {
        CustomField: 'test'
      }
    })
  })
})
