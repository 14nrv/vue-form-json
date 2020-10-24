import matchers from 'jest-vue-matcher'
import { mount } from '@vue/test-utils'
import Label from '@/components/Fields/Label'

const LABEL = 'the label'
let wrapper

describe('Label', () => {
  beforeEach(() => {
    wrapper = mount(Label, {
      propsData: {
        item: {
          label: LABEL
        }
      }
    })
    expect.extend(matchers(wrapper))
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('shows a label', () => {
    expect('label').toHaveText(LABEL)
  })

  it('shows an alternative label', async () => {
    const ALTERNATIVE_LABEL = 'an alternative label'

    await wrapper.setProps({
      item: {
        label: LABEL,
        alternativeLabel: ALTERNATIVE_LABEL
      }
    })

    expect('label').toHaveText(ALTERNATIVE_LABEL)
    expect('label').not.toHaveText(LABEL)
  })

  it('hides the label', async () => {
    await wrapper.setProps({
      item: {
        label: LABEL,
        showLabel: false
      }
    })

    expect('label').not.toBeADomElement()
  })

  it('has a for attribute by default', () => {
    expect('label').toHaveAttribute('for', 'the-label')
  })

  it('has a custom for attribute', async () => {
    const ATTR_FOR = 'a-custom-for-attribute'

    await wrapper.setProps({
      item: {
        label: LABEL,
        for: ATTR_FOR
      }
    })

    expect('label').toHaveAttribute('for', ATTR_FOR)
  })

  it('is mandatory by default', () => {
    expect('label').toHaveText('*')
  })

  it('is not mandatory', async () => {
    await wrapper.setProps({
      item: {
        label: LABEL,
        isRequired: false
      }
    })

    expect('label').not.toHaveText('*')
  })
})
