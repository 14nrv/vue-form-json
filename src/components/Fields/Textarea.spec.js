import Textarea from './Textarea'
import matchers from 'jest-vue-matcher'
import { mount } from '@vue/test-utils'

let wrapper

describe('Textarea', () => {
  beforeEach(() => {
    wrapper = mount(Textarea, {
      propsData: {
        item: {
          label: 'label'
        },
        error: undefined
      }
    })
    expect.extend(matchers(wrapper))
  })

  it('exists', () => {
    expect('textarea').toBeADomElement()
  })
})
