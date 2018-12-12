import Helpers from 'mwangaben-vthelpers'
import VeeValidate from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form'
import fields from './fields'

const v = new VeeValidate.Validator()
const localVue = createLocalVue()
localVue.use(VeeValidate)

let wrapper, b

const FORM_NAME = 'testFormName'
const fakeSlot = '[data-test=htmlContentFromFormFields]'

describe('Fake slot', () => {
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

  it('does not have fake slot if no key html in json', async () => {
    wrapper.setProps({ formFields: [ { label: 'x' }, [{ label: 'y' }, { label: 'z' }] ] })
    await wrapper.vm.$nextTick()

    b.domHasNot(fakeSlot)
  })

  it('show fake slot if html key is defined in json', async () => {
    const fakeSlotContent = 'this is a fake slot'

    wrapper.setProps({ formFields: [{ html: `<p>${fakeSlotContent}</p>` }] })
    await wrapper.vm.$nextTick()

    b.domHas(fakeSlot)
    b.see(fakeSlotContent)

    const allParagraphs = wrapper.findAll('form > div p')
    expect(allParagraphs).toHaveLength(1)
  })
})
