import matchers from 'jest-vue-matcher'
import { mount, createLocalVue, createWrapper } from '@vue/test-utils'
import { slug } from '@/helpers'
import { extendRules, flush } from '@/helpers/test'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Form from '@/components/Form'
import fields from './fields'

extendRules()

const localVue = createLocalVue()
localVue.component('ValidationProvider', ValidationProvider)
localVue.component('ValidationObserver', ValidationObserver)
localVue.filter('slugify', str => slug(str))

const FORM_NAME = 'testFormName'

const type = (text, input, event = 'input') => {
  const node = wrapper.find(input)
  node.element.type === 'radio'
    ? node.setChecked()
    : node.setValue(text)
  node.trigger(event)
}

let wrapper

const setup = ({
  camelizePayloadKeys = false,
  formFields = fields,
  scopedSlots = {
    boxSlot: '<p>{{ props.prop }}</p>'
  }
} = {}) => {
  wrapper = mount(Form, {
    localVue,
    propsData: {
      camelizePayloadKeys,
      formFields,
      formName: FORM_NAME
    },
    scopedSlots
  })
  expect.extend(matchers(wrapper))
  return { wrapper }
}

describe('slot', () => {
  const slotContainer = '[data-test=slot]'

  it('has no slot by default', async () => {
    setup({ formFields: [{ label: 'superLabel' }] })

    expect(slotContainer).not.toBeADomElement()
  })

  it('has a scoped slot', () => {
    setup()
    expect(slotContainer).toBeADomElement()

    const allSlots = wrapper.findAll(slotContainer)
    expect(allSlots).toHaveLength(1)

    const { props: { prop } } = fields.find(field => 'slot' in field)
    expect(allSlots.at(0).text()).toBe(prop)
  })

  const formFields = [
    {
      slot: 'customField',
      props: {
        placeholder: 'the placeholder'
      }
    },
    {
      label: 'normalInput'
    },
    {
      label: 'notRequiredInput',
      isRequired: false
    }
  ]

  const scopedSlots = {
    customField: `
        <ValidationProvider rules="required" name="fieldInSlot">
          <input
            name="fieldInSlot"
            type="text"
            @input.prevent="props.updateFormValues({
              customField: $event.target.value
            })"
            :placeholder="props.placeholder"
          />
        </ValidationProvider>`
  }

  it('handles a field in a scoped slot with others normal field', async () => {
    const { wrapper } = setup({ formFields, scopedSlots })
    const rootWrapper = createWrapper(wrapper.vm.$root)
    wrapper.vm.$refs.observer.validate = jest.fn(() => true)
    await flush()

    const $normalInput = 'input[name=normalinput]'
    const $fieldInSlot = 'input[name=fieldInSlot]'
    const $inputSubmit = 'input[type=submit]'
    const fieldInSlotValue = 'value for field in slot'
    const normalInputValue = 'a value'

    expect($fieldInSlot).toHaveAttribute('placeholder', formFields[0].props.placeholder)

    expect($inputSubmit).toHaveAttribute('disabled', 'disabled')

    type(fieldInSlotValue, $fieldInSlot)
    type(normalInputValue, $normalInput)
    await flush()

    expect($inputSubmit).toHaveAttribute('disabled', undefined)

    wrapper.find($inputSubmit).trigger('submit')
    await flush()

    expect(rootWrapper).toEmitWith('formSubmitted', {
      formName: FORM_NAME,
      values: {
        customField: fieldInSlotValue,
        normalInput: normalInputValue,
        notRequiredInput: undefined
      }
    })
  })
})
