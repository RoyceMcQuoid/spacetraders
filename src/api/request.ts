import axios from "axios";

const API_URL = 'https://api.spacetraders.io/v2';

export const GET = (path:string, headers: any) => {
  return axios.get(`${API_URL}/${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}

export const POST = (path:string, requestData: any, headers: any) => {
  return axios.post(`${API_URL}/${path}`, requestData, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}