import Input from './Input'
import matchers from 'jest-vue-matcher'
import { mount } from '@vue/test-utils'

let wrapper

describe('Input', () => {
  beforeEach(() => {
    wrapper = mount(Input, {
      propsData: {
        item: {
          label: 'label'
        },
        error: undefined
      }
    })
    expect.extend(matchers(wrapper))
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('exists', () => {
    expect('input').toBeADomElement()
  })
})
