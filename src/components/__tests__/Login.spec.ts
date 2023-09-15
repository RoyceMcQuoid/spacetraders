import { describe, it, expect, beforeEach} from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import Login from '../Login.vue'

describe('Login', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders properly', () => {
    const wrapper = mount(Login, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Login')
  })
})
