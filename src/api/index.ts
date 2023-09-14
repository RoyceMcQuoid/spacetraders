import {GET, POST} from './request';

export const API = {
  getAgent: (token: string) => {
    return GET('my/agent', {"Authorization": `Bearer ${token}`})
  },
  registerAgent: (params: {faction: string, symbol: string}) => POST('register', params, {}),
}