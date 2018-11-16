import Helpers from 'mwangaben-vthelpers'
import VeeValidate from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
import flatten from 'ramda/src/flatten'
import pickAll from 'ramda/src/pickAll'
import map from 'ramda/src/map'
import { slug } from '@/helpers'
import Form from '@/components/Form'
import fields from './fields'

const v = new VeeValidate.Validator()
const localVue = createLocalVue()
localVue.use(VeeValidate)
localVue.filter('slugify', str => slug(str))

let wrapper, b
const $inputSubmit = 'input[type=submit]'
const $reset = 'input[type=reset]'
const $inputFirstName = 'input[name=first-name]'
const $inputLastName = 'input[name=last-name]'

const FORM_NAME = 'testFormName'
const DEFAULT_VALUE = 'test'
const EMAIL_VALUE = `${DEFAULT_VALUE}@aol.fr`
const RADIO_VALUE = 'Radio-One'
const NUMBER_VALUE = '18'
const ZIP_VALUE = '12345'
const PASSWORD_VALUE = 'password'

const getInitialValue = (label, node, attribute) =>
  fields
    .find(field => field.label === label)[node]
    .filter(x => x[attribute])
    .map(({ value, text }) => value || text)

const COUNTRY_VALUE = getInitialValue('Country', 'options', 'selected')[0]
const CHECKBOX_VALUE = getInitialValue('Checkbox', 'items', 'checked')

const allFields = flatten(fields)
const allNormalInputLabel = allFields
  .filter(x => !x.type || x.type === 'password' || x.type === 'tel')
  .map(x => x.label)

describe('Form', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      provide: () => ({
        $validator: v
      }),
      propsData: {
        formFields: fields,
        formName: FORM_NAME
      }
    })
    b = new Helpers(wrapper)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  const fillForm = () => {
    allNormalInputLabel.forEach(x =>
      b.type(DEFAULT_VALUE, `input[name=${slug(x)}]`)
    )

    b.type(EMAIL_VALUE, 'input[name=email]')
    b.type(PASSWORD_VALUE, 'input[name=password]')
    b.type(NUMBER_VALUE, 'input[name=age]')
    b.type(ZIP_VALUE, 'input[name=zip]')
    b.type(DEFAULT_VALUE, 'textarea[name=message]')
  }

  const getFormValues = () => {
    let allValueFromNormalInput = pickAll(allNormalInputLabel, {})
    const setDefaultValue = obj => DEFAULT_VALUE
    allValueFromNormalInput = map(setDefaultValue, allValueFromNormalInput)

    return {
      ...allValueFromNormalInput,
      Password: PASSWORD_VALUE,
      Message: DEFAULT_VALUE,
      Checkbox: CHECKBOX_VALUE,
      Country: COUNTRY_VALUE,
      Email: EMAIL_VALUE,
      Radio: RADIO_VALUE,
      Age: NUMBER_VALUE,
      Zip: ZIP_VALUE
    }
  }

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('have some props', () => {
    expect(wrapper.props().formFields).toBeTruthy()
    expect(wrapper.props().formName).toBeTruthy()
  })

  it('set input type text and required by default', () => {
    const LABEL_INPUT = 'testInput'
    const LABEL_INPUT_SLUGIFY = slug(LABEL_INPUT)
    wrapper.setProps({ formFields: [{ label: LABEL_INPUT }] })

    b.domHas(`input[name=${LABEL_INPUT_SLUGIFY}]`)
    b.domHas('input[type=text]')
    b.domHas(`input#${LABEL_INPUT_SLUGIFY}[required=required]`)
    b.see(LABEL_INPUT, `label[for=${LABEL_INPUT_SLUGIFY}].label p`)
    b.see(' *', 'sup.has-text-grey-light')
  })

  it('set not required', () => {
    const label = 'plop'
    wrapper.setProps({ formFields: [{ label, isRequired: false }] })

    b.domHasNot('.label sup.has-text-grey-light')
    b.domHasNot(`input#${label}[required=required]`)
    b.domHas(`input#${label}[aria-required=false]`)
  })

  it('hide label', () => {
    const label = 'plop'
    wrapper.setProps({ formFields: [{ label, showLabel: false }] })

    b.domHasNot('.label')
  })

  it('show fields', () => {
    b.domHas('.field-body .field .input')
    b.domHas('form > div > .field .input')
    b.domHas($inputSubmit)
  })

  it('have a help field', () => {
    b.domHas('.helpLabel')
  })

  it('have default properties', () => {
    b.hasAttribute('placeholder', 'Last Name placeholder', $inputLastName)
    b.hasAttribute('minlength', '3', $inputLastName)
    b.hasAttribute('min', '0', 'input[name=zip]')
    b.hasAttribute('min', '18', 'input[name=age]')
    b.hasAttribute('max', '99', 'input[name=age]')
  })

  it('validate on blur', async () => {
    const isDanger = '.is-danger'

    b.domHas(`${$inputLastName}:not(${isDanger})`)

    b.type('la', $inputLastName, 'blur')
    await wrapper.vm.$nextTick()

    b.domHas(`${$inputLastName}${isDanger}`)
  })

  describe('default value', () => {
    it('set default value on radio', async () => {
      const inputSubmit = b.find($inputSubmit)
      const radioField = {
        label: 'Radio0',
        type: 'radio',
        items: [{ text: 'vRadioOne', checked: true }, 'vRadioTwo', 'vRadioThree']
      }

      wrapper.setProps({ formFields: [radioField] })
      await wrapper.vm.$nextTick()

      const radioValue = radioField.items[0].text
      b.inputValueIs(radioValue, `input[name=${slug(radioField.label)}]`)

      expect(wrapper.vm.isFormValid).toBeTruthy()
      expect(inputSubmit.attributes().disabled).toBe(undefined)
    })

    it('have default value', () => {
      b.inputValueIs('fir', $inputFirstName)
      b.inputValueIs('ZB', 'select[name=country]')
    })

    it('can have error on prefill input', () => {
      b.domHas(`${$inputFirstName}.is-danger`)
      b.see('The First Name field must be at least 4 characters.', '.help.is-danger')
    })
  })

  describe('submit', () => {
    it('have submit btn disabled', () => {
      const inputSubmit = b.find($inputSubmit)
      b.click('.checkbox')
      b.type(RADIO_VALUE, 'input[name=radio]', 'change')
      b.type(COUNTRY_VALUE, 'select[name=country]', 'change')
      expect(inputSubmit.attributes().disabled).toBe('disabled')
    })

    it('enable submit input if all fields are valid', () => {
      const inputSubmit = b.find($inputSubmit)
      expect(inputSubmit.attributes().disabled).toBe('disabled')

      fillForm()

      expect(wrapper.vm.isFormValid).toBeTruthy()
      expect(inputSubmit.attributes().disabled).toBe(undefined)
    })

    it('send an event formSubmitted with all values when submit', async () => {
      fillForm()
      await wrapper.vm.beforeSubmit()

      b.emittedContains('formSubmitted', {
        formName: FORM_NAME,
        values: getFormValues()
      })
    })
  })

  describe('reset', () => {
    it('reset values after submit', async () => {
      wrapper.setProps({ resetFormAfterSubmit: true })

      const resetFormStub = jest.fn()
      wrapper.setMethods({ resetForm: resetFormStub })

      fillForm()
      await wrapper.vm.beforeSubmit()

      expect(resetFormStub).toHaveBeenCalled()
    })

    it(`doesn't reset values after submit`, async () => {
      const resetFormStub = jest.fn()
      wrapper.setMethods({ resetForm: resetFormStub })

      fillForm()
      await wrapper.vm.beforeSubmit()

      expect(resetFormStub).not.toHaveBeenCalled()
    })

    it('have a btn to reset values', () => {
      b.domHas($reset)
      b.click($reset)
    })

    it('can reset value', () => {
      const resetFormStub = jest.fn()
      wrapper.setMethods({ resetForm: resetFormStub })

      b.click($reset)

      expect(resetFormStub).toHaveBeenCalled()
    })
  })
})
