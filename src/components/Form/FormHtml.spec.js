import { mount } from '@vue/test-utils'
import Form from '@/components/Form'
import matchers from 'jest-vue-matcher'

let wrapper

const FORM_NAME = 'testFormName'
const htmlContainer = '[data-test=htmlContentFromFormFields]'

describe('Form with html content inside json', () => {
  beforeEach(() => {
    wrapper = mount(Form, {
      propsData: {
        formFields: [{ label: 'defaultLabel' }],
        formName: FORM_NAME
      }
    })
    expect.extend(matchers(wrapper))
  })

  it('show html content inside json if html key is defined in json', async () => {
    const htmlContent = 'this is a html content'

    expect(htmlContainer).not.toBeADomElement()

    await wrapper.setProps({ formFields: [{ html: `<p>${htmlContent}</p>` }] })

    expect(htmlContainer).toBeADomElement()
    expect('div').toHaveText(htmlContent)

    const allParagraphs = wrapper.findAll('form > div p')
    expect(allParagraphs).toHaveLength(1)
  })
})
