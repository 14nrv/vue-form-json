import Helpers from 'mwangaben-vthelpers'
import VeeValidate from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form'

const v = new VeeValidate.Validator()
const localVue = createLocalVue()
localVue.use(VeeValidate)

let wrapper, b
const FORM_NAME = 'testFormName'

describe('custom css class', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      provide: () => ({ $validator: v }),
      propsData: {
        formFields: [{ label: 'default' }],
        formName: FORM_NAME
      }
    })
    b = new Helpers(wrapper)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('apply custom class on .field & input', async () => {
    const fields = [{
      label: 'custom label',
      attr: {
        class: 'inputClass'
      },
      field: {
        attr: {
          class: 'labelDefaultMb has-text-centered'
        }
      }
    }]

    wrapper.setProps({ formFields: fields })
    await wrapper.vm.$nextTick()

    const fieldClass = fields[0].field.attr.class
    b.domHas(`.field.${fieldClass.split(' ').join('.')} input.${fields[0].attr.class}`)
  })

  it('add customs class in json array', async () => {
    const Y_CLASS_NAME = 'yClass'
    const Z_CLASS_NAME = 'zClass'

    wrapper.setProps({
      formFields: [
        [
          { label: 'x' },
          { label: 'y', field: { attr: { class: Y_CLASS_NAME } } },
          { label: 'z', field: { attr: { class: Z_CLASS_NAME } } }
        ]
      ]
    })
    await wrapper.vm.$nextTick()

    b.domHas(`.field.${Y_CLASS_NAME}`)
    b.domHas(`.field.${Z_CLASS_NAME}`)

    const allY = wrapper.findAll(`.${Y_CLASS_NAME}`)
    expect(allY).toHaveLength(1)

    const allZ = wrapper.findAll(`.${Z_CLASS_NAME}`)
    expect(allZ).toHaveLength(1)
  })

  it('add custom class with classic json & slot', async () => {
    const LABEL_CLASS = 'labelClass'
    const SLOT_CLASS = 'slotClass'

    wrapper.setProps({
      formFields: [
        { label: 'label', field: { attr: { class: LABEL_CLASS } } },
        { slot: 'slotName', attr: { class: SLOT_CLASS } }
      ]
    })
    await wrapper.vm.$nextTick()

    b.domHas(`.field.${LABEL_CLASS} > .control input#label`)
    b.domHas(`.field.${SLOT_CLASS}`)
  })

  it('add custom class with json html content', async () => {
    const HTML_CLASS = 'htmlClass'
    const CONTENT_CLASS = 'custom-content'

    wrapper.setProps({
      formFields: [{
        html: `<p class=${CONTENT_CLASS}>content</p>`,
        attr: { class: HTML_CLASS }
      }]
    })
    await wrapper.vm.$nextTick()

    b.domHas(`.field.${HTML_CLASS} > .${CONTENT_CLASS}`)
  })

  it.each([['', 'select'], ['', 'textarea'], ['input', 'radio'], ['input', 'checkbox']])(
    `apply attr on %s %s`,
    async (dom, type) => {
      const EL_CLASS = `${type}Class`

      wrapper.setProps({
        formFields: [{
          label: `${type} label`,
          type: `${type}`,
          attr: { class: EL_CLASS },
          items: dom === 'input' && ['item1']
        }]
      })
      await wrapper.vm.$nextTick()

      b.domHas(`${dom || type}.${EL_CLASS}`)
    }
  )
})
