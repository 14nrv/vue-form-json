import matchers from 'jest-vue-matcher'
import { mount, createLocalVue } from '@vue/test-utils'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Form from '@/components/Form'
import { extendRules, flush } from '@/helpers'

extendRules()

const localVue = createLocalVue()
localVue.component('ValidationProvider', ValidationProvider)
localVue.component('ValidationObserver', ValidationObserver)

let wrapper

const FORM_NAME = 'testFormName'
const WORD_IN_IS_NOT_RULE = 'small'

const $inputSmall = 'input#small'
const $isDanger = '.is-danger'
const $helpIsDanger = `.help${$isDanger}`

const type = async (text, input, event = 'input') => {
  const node = wrapper.find(input)
  node.element.type === 'radio'
    ? node.setChecked()
    : node.setValue(text)
  node.trigger(event)
  await flush()
}

describe('Form with html content inside json', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      propsData: {
        formFields: [{
          label: 'small',
          rules: { is_not: WORD_IN_IS_NOT_RULE, numeric: true }
        }],
        formName: FORM_NAME
      }
    })
    expect.extend(matchers(wrapper))
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('apply custom rules in order', async () => {
    expect($isDanger).not.toBeADomElement()

    await type(WORD_IN_IS_NOT_RULE, $inputSmall)

    expect($isDanger).toBeADomElement()
    expect($helpIsDanger).toHaveText(`${WORD_IN_IS_NOT_RULE} is not valid.`)

    await type('not-small', $inputSmall)

    expect($helpIsDanger).toHaveText('The small field may only contain numeric characters')

    await type(0, $inputSmall)

    expect($isDanger).not.toBeADomElement()

    const $inputSubmit = 'input[type=submit]'
    expect($inputSubmit).toHaveAttribute('disabled', undefined)
  })
})
