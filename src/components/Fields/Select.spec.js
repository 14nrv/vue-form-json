import matchers from 'jest-vue-matcher'
import { mount, createLocalVue } from '@vue/test-utils'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { extendRules, slug } from '@/helpers'
import Form from '@/components/Form'

extendRules()

const localVue = createLocalVue()
localVue.component('ValidationProvider', ValidationProvider)
localVue.component('ValidationObserver', ValidationObserver)
localVue.filter('slugify', str => slug(str))

let wrapper

const selectFormField = [{
  label: 'Country',
  type: 'select',
  iconLeft: 'globe-americas',
  placeholder: 'Select your option',
  options: [
    'Afghanistan',
    'Åland Islands'
  ]
}]

const setup = ({
  formFields = selectFormField
} = {}) => {
  wrapper = mount(Form, {
    localVue,
    propsData: {
      formName: 'testSelect',
      formFields
    }
  })
  expect.extend(matchers(wrapper))
  return {
    wrapper,
    getAllOptions: () => wrapper.find('select').findAll('option')
  }
}

describe('Select', () => {
  it('has multiple options', () => {
    const { wrapper } = setup()
    const options = wrapper.findAll('select > option')
    expect(options).toHaveLength(3)
  })

  it('has a first option disabled & selected as placeholder', () => {
    const { wrapper } = setup()

    const firstOption = wrapper.findAll('select > option').at(0)
    const { disabled, text } = firstOption.element

    expect(firstOption.attributes('selected')).toBe('selected')
    expect(disabled).toBe(true)
    expect(text).toBe(selectFormField[0].placeholder)
  })

  it('has no value by default', () => {
    setup()
    expect('select').toHaveValue('')
  })

  it('changes value', async () => {
    const { getAllOptions, wrapper } = setup()
    await getAllOptions().at(1).setSelected()

    const expectedValue = selectFormField[0].options[0]
    const expectedFormValues = { [selectFormField[0].label]: expectedValue }
    expect('select').toHaveValue(expectedValue)
    expect(wrapper.vm.formValues).toStrictEqual(expectedFormValues)
  })

  it('changes the selected options to the placeholder on reset', async () => {
    const { getAllOptions, wrapper } = setup()
    await getAllOptions().at(1).setSelected()

    wrapper.find('input[type=reset]').trigger('reset')

    expect('select').toHaveValue('')
    expect(wrapper.vm.$el.querySelector('select').selectedIndex).toBe(0)
  })

  it('removes selected options on reset if no placeholder', async () => {
    const [{ placeholder, ...rest }] = selectFormField
    const { getAllOptions, wrapper } = setup({ formFields: [rest] })
    await getAllOptions().at(1).setSelected()

    wrapper.find('input[type=reset]').trigger('reset')

    expect(wrapper.vm.$el.querySelector('select').selectedIndex).toBe(0)
  })
})
