import matchers from 'jest-vue-matcher'
import { mount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form'
import flushPromises from 'flush-promises'
import * as rules from 'vee-validate/dist/rules.umd.js'
import { messages } from 'vee-validate/dist/locale/en.json'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})

const localVue = createLocalVue()
localVue.component('ValidationProvider', ValidationProvider)
localVue.component('ValidationObserver', ValidationObserver)

let wrapper

const FORM_NAME = 'testFormName'
const WORD_IN_IS_NOT_RULE = 'small'

const $inputSmall = 'input#small'
const $isDanger = '.is-danger'
const $helpIsDanger = `.help${$isDanger}`

const type = (text, input, event = 'input') => {
  const node = wrapper.find(input)
  node.element.type === 'radio'
    ? node.setChecked()
    : node.setValue(text)
  node.trigger(event)
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

    type(WORD_IN_IS_NOT_RULE, $inputSmall)
    await flushPromises()

    expect($isDanger).toBeADomElement()
    expect($helpIsDanger).toHaveText(`${WORD_IN_IS_NOT_RULE} is not valid.`)

    type('not-small', $inputSmall)
    await flushPromises()

    expect($helpIsDanger).toHaveText('The small field may only contain numeric characters')

    type(0, $inputSmall)
    await flushPromises()

    expect($isDanger).not.toBeADomElement()

    const $inputSubmit = 'input[type=submit]'
    expect($inputSubmit).toHaveAttribute('disabled', undefined)
  })
})
