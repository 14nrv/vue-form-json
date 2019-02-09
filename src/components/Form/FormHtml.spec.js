import Helpers from 'mwangaben-vthelpers'
import VeeValidate from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form'

const v = new VeeValidate.Validator()
const localVue = createLocalVue()
localVue.use(VeeValidate)

let wrapper, b

const FORM_NAME = 'testFormName'
const htmlContainer = '[data-test=htmlContentFromFormFields]'

describe('Form with html content inside json', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      provide: () => ({ $validator: v }),
      propsData: {
        formFields: [{ label: 'defaultLabel' }],
        formName: FORM_NAME
      }
    })
    b = new Helpers(wrapper)
  })

  it('show html content inside json if html key is defined in json', async () => {
    const htmlContent = 'this is a html content'

    b.domHasNot(htmlContainer)

    wrapper.setProps({ formFields: [{ html: `<p>${htmlContent}</p>` }] })
    await wrapper.vm.$nextTick()

    b.domHas(htmlContainer)
    b.see(htmlContent)

    const allParagraphs = wrapper.findAll('form > div p')
    expect(allParagraphs).toHaveLength(1)
  })
})
