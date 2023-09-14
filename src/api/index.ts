import {POST} from './request';

export const API = {
  registerAgent: (params: any) => POST('register', params),
}