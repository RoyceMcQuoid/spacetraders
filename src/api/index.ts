import {GET, POST} from './request';

export const API = {
  getAgent: (params: {token: string}) => GET('my/agent', params),
  registerAgent: (params: {faction: string, symbol: string}) => POST('register', params),
}