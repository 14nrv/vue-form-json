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

describe('Form Error', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      provide: () => ({
        $validator: v
      }),
      propsData: {
        formFields: [{ label: LABEL_INPUT, min: MIN_LENGTH }],
        formName: FORM_NAME
      }
    })
    b = new Helpers(wrapper, expect)
  })

  it('show error if input value has not min length', async () => {
    const LABEL_INPUT_SLUGIFY = slug(LABEL_INPUT)
    const $inputTest = `input[name=${LABEL_INPUT_SLUGIFY}]`
    const $error = `${$inputTest} ~ .help.is-danger`

    b.domHasNot($error)
    b.type('123456789', $inputTest)

    await wrapper.vm.$nextTick()

    b.domHas(`${$inputTest}.is-danger`)
    b.domHas(`${$inputTest} ~ .icon.is-right`)

    b.domHas($error)
    b.see(`The ${LABEL_INPUT} field must be at least ${MIN_LENGTH} characters.`, $error)
  })
})
