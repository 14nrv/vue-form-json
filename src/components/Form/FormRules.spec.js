import Helpers from 'mwangaben-vthelpers'
import VeeValidate from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form'

const v = new VeeValidate.Validator()
const localVue = createLocalVue()
localVue.use(VeeValidate)

let wrapper, b

const FORM_NAME = 'testFormName'
const WORD_IN_IS_NOT_RULE = 'small'

const $inputSmall = 'input#small'
const $isDanger = '.is-danger'
const $helpIsDanger = `.help${$isDanger}`

describe('Form with html content inside json', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      provide: () => ({
        $validator: v
      }),
      propsData: {
        formFields: [{
          label: 'small',
          validation: { is_not: WORD_IN_IS_NOT_RULE, numeric: true }
        }],
        formName: FORM_NAME
      }
    })
    b = new Helpers(wrapper)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('apply custom rules in order', async () => {
    b.domHasNot($isDanger)

    b.type(WORD_IN_IS_NOT_RULE, $inputSmall)
    await wrapper.vm.$nextTick()

    b.domHas($isDanger)
    b.see(`The ${WORD_IN_IS_NOT_RULE} value is not valid.`, $helpIsDanger)

    b.type('not-small', $inputSmall)
    await wrapper.vm.$nextTick()

    b.see('The small field may only contain numeric characters.', $helpIsDanger)

    b.type(0, $inputSmall)
    await wrapper.vm.$nextTick()

    b.domHasNot($isDanger)

    expect(wrapper.vm.isFormValid).toBeTruthy()

    const $inputSubmit = b.find('input[type=submit]')
    expect($inputSubmit.attributes().disabled).toBe(undefined)
  })
})
