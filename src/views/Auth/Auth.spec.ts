import {describe, it, expect, beforeEach, vi} from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import Auth from './Auth.vue';
import {AUTH} from "@/constants/views/Auth";
import axios from "axios";

const GET_AGENT_URL = /\/v2\/users\/agent$/;

vi.mock('axios');

describe('Auth', () => {
  const testAgent = {
    symbol: 'testSymbol',
  };


  beforeEach(() => {
    setActivePinia(createPinia());
  })
  it('renders properly', () => {
    const wrapper = mount(Auth)
    expect(wrapper.text()).toContain(AUTH.INVITE_MESSAGE)
  })
  it('displays welcome after logging in', () => {
    const wrapper = mount(Auth)
    const tokenInput = wrapper.findComponent('[data-testid="login-token-input"]');
    expect(tokenInput.exists()).toBe(true);
    const loginButton = wrapper.findComponent('[data-testid="login-submit-button"]');


    vi.mocked(axios.get).mockResolvedValue({data: testAgent});

    tokenInput.setValue('testToken');
    loginButton.trigger('click');
    expect(wrapper.text()).toContain(`${AUTH.WELCOME_BACK_MESSAGE} ${testAgent.symbol}`);
  });
})
