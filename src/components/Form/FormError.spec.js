import Helpers from 'mwangaben-vthelpers'
import VeeValidate from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
import { slug } from '@/helpers'
import Form from '@/components/Form'

const v = new VeeValidate.Validator()
const localVue = createLocalVue()
localVue.use(VeeValidate)

let wrapper, b
const FORM_NAME = 'testFormName'
const MIN_LENGTH = 10
const LABEL_INPUT = 'test input'
const INPUT_NUMBER = 'input[name=number]'
const INPUT_NUMBER_PROPS = {
  label: 'Number',
  type: 'number',
  min: 18,
  max: 99
}

describe('Form Error', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      provide: () => ({
        $validator: v
      }),
      propsData: {
        formFields: [
          {
            label: LABEL_INPUT,
            minLength: MIN_LENGTH
          },
          INPUT_NUMBER_PROPS
        ],
        formName: FORM_NAME
      }
    })
    b = new Helpers(wrapper)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('show error if input value has not min length', async () => {
    const LABEL_INPUT_SLUGIFY = slug(LABEL_INPUT)
    const $inputTest = `input[name=${LABEL_INPUT_SLUGIFY}]`
    const $error = `${$inputTest} ~ .help.is-danger`

    const beforeSubmitStub = jest.fn()
    wrapper.setMethods({ beforeSubmit: beforeSubmitStub })

    b.domHasNot($error)
    b.type('123456789', $inputTest)

    await wrapper.vm.$nextTick()

    b.domHas(`${$inputTest}.is-danger`)
    b.domHas(`${$inputTest} ~ .icon.is-right`)

    b.domHas($error)
    b.see(`The ${LABEL_INPUT} field must be at least ${MIN_LENGTH} characters.`, $error)

    b.click('input[type=submit]')
    expect(beforeSubmitStub).not.toHaveBeenCalled()
  })

  describe('number input', () => {
    const { min, max } = INPUT_NUMBER_PROPS

    const testInputValue = val => {
      const isMinValue = val === min

      it(`set ${isMinValue ? 'min' : 'max'} value control on input number`, async () => {
        const inputValue = (isMinValue ? val - 1 : val + 1).toString()

        b.type(inputValue, INPUT_NUMBER)
        b.inputValueIs(inputValue, INPUT_NUMBER)
        await wrapper.vm.$nextTick()

        b.domHas(`${INPUT_NUMBER}.is-danger`)
        b.see(`The Number field must be ${val} or ${isMinValue ? 'more' : 'less'}.`)
      })
    }

    testInputValue(min)
    testInputValue(max)
  })
})
