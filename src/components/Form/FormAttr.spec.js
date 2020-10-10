import matchers from 'jest-vue-matcher'
import { ValidationProvider } from 'vee-validate'
import { mount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form'

const localVue = createLocalVue()
localVue.component('ValidationProvider', ValidationProvider)

let wrapper
const FORM_NAME = 'testFormName'

describe('custom css class', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      localVue,
      propsData: {
        formFields: [{ label: 'default' }],
        formName: FORM_NAME
      }
    })
    expect.extend(matchers(wrapper))
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

    await wrapper.setProps({ formFields: fields })

    const fieldClass = fields[0].field.attr.class
    expect(`.field.${fieldClass.split(' ').join('.')} input.${fields[0].attr.class}`).toBeADomElement()
  })

  it('add customs class in json array', async () => {
    const Y_CLASS_NAME = 'yClass'
    const Z_CLASS_NAME = 'zClass'

    await wrapper.setProps({
      formFields: [
        [
          { label: 'x' },
          { label: 'y', field: { attr: { class: Y_CLASS_NAME } } },
          { label: 'z', field: { attr: { class: Z_CLASS_NAME } } }
        ]
      ]
    })

    expect(`.field.${Y_CLASS_NAME}`).toBeADomElement()
    expect(`.field.${Z_CLASS_NAME}`).toBeADomElement()

    const allY = wrapper.findAll(`.${Y_CLASS_NAME}`)
    expect(allY).toHaveLength(1)

    const allZ = wrapper.findAll(`.${Z_CLASS_NAME}`)
    expect(allZ).toHaveLength(1)
  })

  it('add custom class with classic json & slot', async () => {
    const LABEL_CLASS = 'labelClass'
    const SLOT_CLASS = 'slotClass'

    await wrapper.setProps({
      formFields: [
        { label: 'label', field: { attr: { class: LABEL_CLASS } } },
        { slot: 'slotName', attr: { class: SLOT_CLASS } }
      ]
    })

    expect(`.field.${LABEL_CLASS} .control input#label`).toBeADomElement()
    expect(`.field.${SLOT_CLASS}`).toBeADomElement()
  })

  it('add custom class with json html content', async () => {
    const HTML_CLASS = 'htmlClass'
    const CONTENT_CLASS = 'custom-content'

    await wrapper.setProps({
      formFields: [{
        html: `<p class=${CONTENT_CLASS}>content</p>`,
        attr: { class: HTML_CLASS }
      }]
    })

    expect(`.field.${HTML_CLASS} > .${CONTENT_CLASS}`).toBeADomElement()
  })

  it.each([['', 'select'], ['', 'textarea'], ['input', 'radio'], ['input', 'checkbox']])(
    'apply attr on %s %s',
    async (dom, type) => {
      const EL_CLASS = `${type}Class`

      await wrapper.setProps({
        formFields: [{
          label: `${type} label`,
          type: `${type}`,
          attr: { class: EL_CLASS },
          items: dom === 'input' && ['item1']
        }]
      })

      expect(`${dom || type}.${EL_CLASS}`).toBeADomElement()
    }
  )
})
