import {GET, POST} from './request';

export const API = {
  getAgent: (token: string) => {
    return GET('my/agent', {"Authorization": `Bearer ${token}`})
  },
  getContractList: (token: string) => {
    return GET('my/contracts', {"Authorization": `Bearer ${token}`})
  },
  getShipList: (token: string) => {
    return GET('my/ships', {"Authorization": `Bearer ${token}`})
  },
  registerAgent: (params: {faction: string, symbol: string}) => POST('register', params, {}),
}