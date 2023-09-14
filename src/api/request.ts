import axios from "axios";

const API_URL = 'https://api.spacetraders.io';

export const POST = async (path:string, requestData: any) => {
  const {
    data
  } = await axios.post(`${API_URL}/${path}`, requestData);
  return data.data;
}