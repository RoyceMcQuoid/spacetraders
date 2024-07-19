import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { VueWrapper, mount } from '@vue/test-utils'
import Auth from './Auth.vue'
import Login from '../../components/Login/Login.vue'
import { AUTH as AuthMessages } from '../../constants/views/Auth'
import { API } from '@/api'
import type { Agent } from '@/models/Agent'

vi.mock('axios')

describe('Auth', () => {
  let testAgent: Agent

  beforeEach(setupPinia)
  beforeEach(setupTestData)

  it('renders properly', () => {
    const wrapper = mount(Auth)
    expect(wrapper.text()).toContain(AuthMessages.INVITE_MESSAGE)
  })

  it('displays welcome after logging in', async () => {
    const component = mount(Auth)

    mockGetAgentResponse({ data: testAgent })
    await login(component)

    expect(component.text()).toContain(`${AuthMessages.WELCOME_BACK_MESSAGE} ${testAgent.symbol}.`)
  })

  async function login(wrapper: VueWrapper<any, any>): Promise<void> {
    const component = wrapper.getComponent(Login)
    await component.get('input.login-token-input').setValue('doesnt matter')
    await component.get('button.login-submit-button').trigger('click')
  }

  function mockGetAgentResponse(data: { data: Agent }): void {
    vi.spyOn(API, 'getAgent').mockImplementation(() =>
      Promise.resolve({
        data
      } as unknown as ReturnType<typeof API.getAgent>)
    )
  }

  function setupTestData(): void {
    testAgent = {
      symbol: 'testSymbol'
    } as Agent
  }

  function setupPinia(): void {
    setActivePinia(createPinia())
  }
})