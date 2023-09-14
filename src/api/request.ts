import axios from "axios";

const API_URL = 'https://api.spacetraders.io/v2';

export const GET = async (path:string, requestData: any) => {
  const {
    data
  } = await axios.get(`${API_URL}/${path}`, requestData);
  return data.data;
}

export const POST = async (path:string, requestData: any) => {
  const {
    data
  } = await axios.post(`${API_URL}/${path}`, requestData);
  return data.data;
}