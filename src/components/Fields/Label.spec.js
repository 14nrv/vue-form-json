import matchers from 'jest-vue-matcher'
import { mount } from '@vue/test-utils'
import Label from '@/components/Fields/Label'

const HELP = '(help content)'
const LABEL = 'the label'
const ITEM = {
  help: HELP,
  label: LABEL
}
let wrapper

const setup = ({
  hasAsteriskJustAfterLabel = false,
  item = ITEM
} = {}) => {
  wrapper = mount(Label, {
    propsData: {
      item
    },
    computed: {
      hasAsteriskJustAfterLabel: () => hasAsteriskJustAfterLabel
    }
  })
  expect.extend(matchers(wrapper))
  return wrapper
}

describe('Label', () => {
  afterEach(() => {
    wrapper.destroy()
  })

  it('shows a label', () => {
    setup()
    expect('label').toHaveText(LABEL)
  })

  it('shows an alternative label', () => {
    const ALTERNATIVE_LABEL = 'an alternative label'
    const item = { ...ITEM, alternativeLabel: ALTERNATIVE_LABEL }
    setup({ item })

    expect('label').toHaveText(ALTERNATIVE_LABEL)
    expect('label').not.toHaveText(LABEL)
  })

  it('hides the label', () => {
    const item = { ...ITEM, showLabel: false }
    setup({ item })

    expect('label').not.toBeADomElement()
  })

  it('has a for attribute by default', () => {
    setup()

    expect('label').toHaveAttribute('for', 'the-label')
  })

  it('has a custom for attribute', () => {
    const ATTR_FOR = 'a-custom-for-attribute'
    const item = { ...ITEM, for: ATTR_FOR }
    setup({ item })

    expect('label').toHaveAttribute('for', ATTR_FOR)
  })

  it('is mandatory by default', () => {
    setup()
    expect('label').toHaveText(`${LABEL}${HELP}*`)
  })

  it('is not mandatory', () => {
    const item = { ...ITEM, isRequired: false }
    setup({ item })

    expect('label').not.toHaveText('*')
  })

  it('put the asterisk just after the label', () => {
    setup({ hasAsteriskJustAfterLabel: true })
    expect('label').toHaveText(`${LABEL}*${HELP}`)
  })
})
