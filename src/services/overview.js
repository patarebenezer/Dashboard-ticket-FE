import axios from "axios";

const API_URL = "https://664c56f235bbda10987ff145.mockapi.io/api/v1";

export const overviewService = async () => {
 try {
  const response = await axios.get(`${API_URL}/overview`);
  console.log("response", response.data);
  return response.data;
 } catch (error) {
  throw new Error(error.message);
 }
};
