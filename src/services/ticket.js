import axios from "axios";

const API_URL = "https://dummyjson.com";

export const ticketService = async () => {
 try {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
 } catch (error) {
  throw new Error(error.message);
 }
};
