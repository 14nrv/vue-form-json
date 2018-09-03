import Helpers from 'mwangaben-vthelpers'
import VeeValidate from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
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

describe('Form', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      provide: () => ({
        $validator: v
      }),
      propsData: {
        formFields: fields,
        formName: 'testformName'
      }
    })
    b = new Helpers(wrapper, expect)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('have some props', () => {
    expect(wrapper.props().formFields).toBeTruthy()
    expect(wrapper.props().formName).toBeTruthy()
  })

  it('show fields', () => {
    b.domHas('.field-body .field .input')
    b.domHas('form > div > .field .input')
    b.domHas($inputSubmit)
  })

  it('have submit btn disabled', () => {
    const inputSubmit = b.find($inputSubmit)
    expect(inputSubmit.attributes().disabled).toBe('disabled')
  })

  it('enable submit input if all fields are valid', async () => {
    const inputSubmit = b.find($inputSubmit)
    expect(inputSubmit.attributes().disabled).toBe('disabled')

    b.type('test@aol.fr', 'input[name=email]')
    b.type('test', 'input[name=first-name]')
    b.type('test', 'input[name=last-name]')
    b.type('test', 'input[name=phone-number]')
    b.type('test', 'input[name=address]')
    b.type('test', 'input[name=zip]')
    b.type('test', 'input[name=city]')
    b.type('test', 'textarea[name=message]')
    b.type('123456', 'input[name=password]')
    b.type('123456', 'input[name=confirm-password]')

    b.type('Zimbabwe', 'select[name=country]', 'change')
    b.type('one', 'input[name=checkbox]', 'change')
    b.type('RadioTwo', 'input[name=radio]', 'change')

    expect(wrapper.vm.isFormValid).toBeTruthy()

    await wrapper.vm.beforeSubmit()
    expect(inputSubmit.attributes().disabled).toBe(undefined)
    b.emitted('formSubmitted')
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
