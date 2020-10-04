import matchers from 'jest-vue-matcher'
import { mount, createLocalVue } from '@vue/test-utils'
import { slug } from '@/helpers'
import Form from '@/components/Form'
import * as rules from 'vee-validate/dist/rules.umd.js'
import { messages } from 'vee-validate/dist/locale/en.json'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'

const flush = async () => {
  // Flush pending Vue promises
  await new Promise(resolve => setTimeout(resolve, 0))
  // Wait a browser tick to make sure changes are applied
  return new Promise(resolve => setTimeout(resolve, 20))
}

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
const MIN_LENGTH = 10
const LABEL_INPUT = 'test input'
const INPUT_NUMBER = 'input[name=number]'
const INPUT_NUMBER_PROPS = {
  label: 'Number',
  type: 'number',
  rules: {
    min_value: 18,
    max_value: 99
  }
}

const type = (text, input, event = 'input') => {
  const node = wrapper.find(input)
  node.element.type === 'radio'
    ? node.setChecked()
    : node.setValue(text)
  node.trigger(event)
}

describe('Form Error', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      propsData: {
        formFields: [
          {
            label: LABEL_INPUT,
            rules: {
              min: MIN_LENGTH
            }
          },
          INPUT_NUMBER_PROPS
        ],
        formName: FORM_NAME
      }
    })
    expect.extend(matchers(wrapper))
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('show error if input value has not min length', async () => {
    const LABEL_INPUT_SLUGIFY = slug(LABEL_INPUT)
    const $inputTest = `input[name=${LABEL_INPUT_SLUGIFY}]`
    const $error = `${$inputTest} ~ .help.is-danger`

    expect($error).not.toBeADomElement()

    type('123456789', $inputTest)
    await flush()

    expect('.is-danger').toBeADomElement()
    expect(`${$inputTest} ~ .icon.is-right`).toBeADomElement()

    expect($error).toHaveText(`The ${LABEL_INPUT} field must be at least ${MIN_LENGTH} characters`, $error)

    expect('input[type=submit]').toHaveAttribute('disabled', 'disabled')
  })

  describe('number input', () => {
    const {
      min_value: minValue,
      max_value: maxValue
    } = INPUT_NUMBER_PROPS.rules

    const testInputValue = val => {
      const isMinValue = val === minValue

      it(`set ${isMinValue ? 'min' : 'max'} value control on input number`, async () => {
        const inputValue = (isMinValue ? val - 1 : val + 1).toString()
        const $error = `${INPUT_NUMBER} ~ .help.is-danger`

        type(inputValue, INPUT_NUMBER)
        expect(INPUT_NUMBER).toHaveValue(inputValue)
        await flush()

        expect(`${INPUT_NUMBER}.is-danger`).toBeADomElement()
        expect($error).toHaveText(`The Number field must be ${val} or ${isMinValue ? 'more' : 'less'}`)
      })
    }

    testInputValue(minValue)
    testInputValue(maxValue)
  })
})
