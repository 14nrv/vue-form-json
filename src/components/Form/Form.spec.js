import matchers from 'jest-vue-matcher'
import { mount, createLocalVue, createWrapper } from '@vue/test-utils'
import { flatten, isEmpty, map, pickAll } from 'ramda'
import { camelizeKeys, slug } from '@/helpers'
import { extendRules, flush } from '@/helpers/test'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Form from '@/components/Form'
import fields from './fields'

extendRules()

const localVue = createLocalVue()
localVue.component('ValidationProvider', ValidationProvider)
localVue.component('ValidationObserver', ValidationObserver)
localVue.filter('slugify', str => slug(str))

let wrapper
const $inputSubmit = 'input[type=submit]'
const $inputReset = 'input[type=reset]'

const $inputFirstName = 'input[name=first-name]'
const $inputLastName = 'input[name=last-name]'
const $inputPassword = 'input[name=password]'
const $errorMessage = '.help.is-danger'
const $errorIcon = '.fa-exclamation-triangle'

const FORM_NAME = 'testFormName'
const DEFAULT_VALUE = 'test'
const EMAIL_VALUE = `${DEFAULT_VALUE}@aol.fr`
const RADIO_VALUE = 'Radio-One'
const NUMBER_VALUE = '18'
const ZIP_VALUE = '12345'
const PASSWORD_VALUE = ZIP_VALUE
const BIG_VALUE = ZIP_VALUE

const allFields = flatten(fields)
  .filter(field => !['html', 'slot'].includes(Object.keys(field)[0]))

const getInitialValue = (label, node, attribute) =>
  allFields
    .find(field => field.label === label)[node]
    .filter(x => x[attribute])
    .map(({ value, text }) => value || text)

const COUNTRY_VALUE = getInitialValue('Country', 'options', 'selected')[0]
const CHECKBOX_VALUE = getInitialValue('Checkbox', 'items', 'checked')

const allNormalInputLabel = allFields
  .filter(x => !x.type || x.type === 'tel')
  .filter(x => !x.validation)
  .map(x => x.name || x.label)

const fieldWithPattern = allFields.find(({ pattern }) => pattern)

const type = (text, input, event = 'input') => {
  const node = wrapper.find(input)
  node.element.type === 'radio'
    ? node.setChecked()
    : node.setValue(text)
  node.trigger(event)
}

const trigger = (element, event = 'click') => {
  wrapper.find(element).trigger(event)
}

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

const fillForm = async () => {
  allNormalInputLabel.forEach(x =>
    type(DEFAULT_VALUE, `input[name=${slug(x)}]`)
  )

  type(EMAIL_VALUE, 'input[name=email]')
  type(PASSWORD_VALUE, $inputPassword)
  type(NUMBER_VALUE, 'input[name=age]')
  type(ZIP_VALUE, 'input[name=zip]')
  type(DEFAULT_VALUE, 'textarea[name=message]')
  type(DEFAULT_VALUE, 'input[name=small]')
  type(BIG_VALUE, 'input[name=big]')

  await flush()
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
    Zip: ZIP_VALUE,
    big: BIG_VALUE,
    small: DEFAULT_VALUE
  }
}

describe('Form', () => {
  it('has some props', () => {
    setup()
    expect(wrapper.props().formFields).toBeTruthy()
    expect(wrapper.props().formName).toBeTruthy()
  })

  it('set input type text and required by default', async () => {
    const LABEL_INPUT = 'testInput'
    const LABEL_INPUT_SLUGIFY = slug(LABEL_INPUT)
    setup({ formFields: [{ label: LABEL_INPUT }] })

    expect(`input[name=${LABEL_INPUT_SLUGIFY}]`).toBeADomElement()
    expect('input[type=text]').toBeADomElement()
    expect(`input#${LABEL_INPUT_SLUGIFY}[required=required]`).toBeADomElement()
    expect(`label[for=${LABEL_INPUT_SLUGIFY}].label p`).toHaveText(LABEL_INPUT)
    expect('sup.has-text-grey-light').toHaveText('*')
  })

  it('set not required', async () => {
    const label = 'plop'
    setup({ formFields: [{ label, isRequired: false }] })

    expect('.label sup.has-text-grey-light').not.toBeADomElement()
    expect(`input#${label}[required=required]`).not.toBeADomElement()
    expect(`input#${label}[aria-required=false]`).toBeADomElement()
  })

  it('hides label', async () => {
    setup({ formFields: [{ label: 'plop', showLabel: false }] })
    expect('.label').not.toBeADomElement()
  })

  it('shows fields', () => {
    setup()
    expect('.field-body .field .input').toBeADomElement()
    expect('form > div > .field .input').toBeADomElement()
    expect($inputSubmit).toBeADomElement()
  })

  it('has a help field', () => {
    setup()
    expect('.helpLabel').toBeADomElement()
  })

  it('hides error icon', async () => {
    const { wrapper } = setup()
    await flush()
    expect($errorIcon).toBeADomElement()

    await wrapper.setProps({ hasIcon: false })
    expect($errorIcon).not.toBeADomElement()
  })

  it('have default properties', () => {
    setup()
    expect($inputLastName).toHaveAttribute('placeholder', 'Last Name placeholder')
    expect($inputLastName).toHaveAttribute('minlength', '3')
    expect('input[name=zip]').toHaveAttribute('min', '0')
    expect('input[name=age]').toHaveAttribute('min', '18')
    expect('input[name=age]').toHaveAttribute('max', '99')
    expect($inputPassword).toHaveAttribute('pattern', fieldWithPattern.pattern)
  })

  it('validate on blur', async () => {
    const isDanger = '.is-danger'
    setup()
    expect(`${$inputLastName}:not(${isDanger})`).toBeADomElement()

    type('la', $inputLastName)
    await flush()

    expect(`${$inputLastName}${isDanger}`).toBeADomElement()
  })

  it('add pattern rule validation', async () => {
    const passwordField = {
      label: 'Password',
      pattern: '^([0-9]+)$'
    }
    setup({ formFields: [passwordField] })

    expect($errorMessage).not.toBeADomElement()

    type(DEFAULT_VALUE, $inputPassword)
    await flush()

    expect($errorMessage).toBeADomElement()

    const errorMessage = wrapper.find($errorMessage).text()
    expect(errorMessage).toBe('The password field format is invalid')

    type(PASSWORD_VALUE, $inputPassword)
    await flush()

    expect($errorMessage).not.toBeADomElement()
  })

  describe('default value', () => {
    it('set default value on radio', async () => {
      const radioField = {
        label: 'Radio0',
        type: 'radio',
        items: [{ text: 'vRadioOne', checked: true }, 'vRadioTwo', 'vRadioThree']
      }

      setup({ formFields: [radioField] })

      const radioValue = radioField.items[0].text
      expect(`input[name=${slug(radioField.label)}]`).toHaveValue(radioValue)

      expect($inputSubmit).toHaveAttribute('disabled', undefined)
    })

    it('has default value', async () => {
      setup()
      await flush()

      expect($inputFirstName).toHaveValue('fir')
      expect('select[name=country]').toHaveValue('ZB')
    })

    it('can have error on prefill input', async () => {
      setup()
      await flush()

      expect(`${$inputFirstName}.is-danger`).toBeADomElement()

      const errorMessage = wrapper.find($errorMessage).text()
      expect(errorMessage).toBe('The first-name field must be at least 4 characters')
    })
  })

  describe('submit', () => {
    it('has submit btn disabled', async () => {
      setup()
      trigger('.checkbox')
      type(RADIO_VALUE, 'input[name=radio]', 'change')
      type(COUNTRY_VALUE, 'select[name=country]', 'change')
      await flush()

      expect($inputSubmit).toHaveAttribute('disabled', 'disabled')
    })

    it('has submit btn disabled if no default value in field', async () => {
      setup({ formFields: [{ label: 'a label' }] })
      await flush()

      expect($inputSubmit).toHaveAttribute('disabled', 'disabled')
    })

    it('has submit btn enabled if field is not required', async () => {
      setup({ formFields: [{ label: 'a label', isRequired: false }] })
      await flush()

      expect($inputSubmit).toHaveAttribute('disabled', undefined)
    })

    it('enables submit input if all fields are valid', async () => {
      setup()
      await flush()

      expect($inputSubmit).toHaveAttribute('disabled', 'disabled')

      await fillForm()
      expect($inputSubmit).toHaveAttribute('disabled', undefined)
    })

    it('has default class', () => {
      setup()
      expect($inputSubmit).toHaveClass('button is-primary')
    })

    it.each([true, false])(
      'sends an event formSubmitted with all values when submit with camelizePayloadKeys set to %s',
      async camelizePayloadKeys => {
        const { wrapper } = setup({ camelizePayloadKeys })
        const rootWrapper = createWrapper(wrapper.vm.$root)

        await fillForm()
        trigger($inputSubmit, 'submit')
        await flush()

        expect(rootWrapper).toEmitWith('formSubmitted', {
          formName: FORM_NAME,
          values: camelizePayloadKeys
            ? camelizeKeys(getFormValues())
            : getFormValues()
        })
      }
    )

    it('does not send event on root if form is not valid', async () => {
      const { wrapper } = setup()
      const rootWrapper = createWrapper(wrapper.vm.$root)
      await wrapper.vm.onSubmit()
      expect(rootWrapper).not.toEmit('formSubmitted')
    })
  })

  describe('reset', () => {
    it('has a btn to reset values', () => {
      setup()
      expect($inputReset).toBeADomElement()
    })

    it('has default class', () => {
      setup()
      expect($inputReset).toHaveClass('button')
    })

    it.each([true, false])(
      'can reset value with resetFormAfterSubmit set to %s',
      async hasResetAfterSubmit => {
        const { wrapper } = setup()
        if (hasResetAfterSubmit) wrapper.setProps({ resetFormAfterSubmit: true })

        const getValues = () => wrapper.vm.allControls.map(({ value }) => value)
        const hasAllValuesEmpty = () => getValues().every(value => isEmpty(value))

        await fillForm()
        expect(hasAllValuesEmpty()).toBeFalsy()

        hasResetAfterSubmit
          ? trigger($inputSubmit, 'submit')
          : trigger($inputReset, 'reset')
        await flush()

        expect(hasAllValuesEmpty()).toBeTruthy()
      }
    )
  })
})
