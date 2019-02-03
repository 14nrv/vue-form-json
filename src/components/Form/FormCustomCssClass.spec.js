import Helpers from 'mwangaben-vthelpers'
import VeeValidate from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
import flatten from 'ramda/src/flatten'
import Form from '@/components/Form'
import fields from './fields'

const v = new VeeValidate.Validator()
const localVue = createLocalVue()
localVue.use(VeeValidate)

let wrapper, b
const FORM_NAME = 'testFormName'

describe('custom css class', () => {
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

  it('apply custom classes', () => {
    const customClassInJson = flatten(fields).find(x => Object.keys(x).includes('parentClass')).parentClass
    const allCustomClass = wrapper.findAll(`.field.${customClassInJson.split(' ').join('.')}`)

    expect(allCustomClass).toHaveLength(1)
  })

  it('add customs class in json array', async () => {
    const Y_CLASS_NAME = 'yClass'
    const Z_CLASS_NAME = 'zClass'

    wrapper.setProps({
      formFields: [
        [
          { label: 'x' },
          { label: 'y', parentClass: Y_CLASS_NAME },
          { label: 'z', parentClass: Z_CLASS_NAME }
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
        { label: 'label', parentClass: LABEL_CLASS },
        { slot: 'slotName', parentClass: SLOT_CLASS }
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
        parentClass: HTML_CLASS
      }]
    })
    await wrapper.vm.$nextTick()

    b.domHas(`.field.${HTML_CLASS} > .${CONTENT_CLASS}`)
  })
})
