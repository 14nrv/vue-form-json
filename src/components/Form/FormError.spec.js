import Helpers from 'mwangaben-vthelpers'
import VeeValidate from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form'
import fields from './fields'

const v = new VeeValidate.Validator()
const localVue = createLocalVue()
localVue.use(VeeValidate)

let wrapper, b
const formName = 'testFormName'

describe('Form Error', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      provide: () => ({
        $validator: v
      }),
      propsData: {
        formFields: fields,
        formName
      }
    })
    b = new Helpers(wrapper, expect)
  })

  it('can show error', async () => {
    const $inputFirstName = 'input[name=first-name]'
    const $error = `${$inputFirstName} ~ .help.is-danger`

    b.type('ab', $inputFirstName)

    await wrapper.vm.$nextTick()

    b.domHas(`${$inputFirstName}.is-danger`)
    b.domHas(`${$inputFirstName} ~ .icon.is-right`)

    b.domHas($error)
    b.see('The First Name field must be at least 3 characters.', $error)
  })
})
