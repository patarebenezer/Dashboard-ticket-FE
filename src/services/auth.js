import axios from "axios";

const API_URL = "https://664c56f235bbda10987ff145.mockapi.io/api/v1/login";

function generateRandomString(length) {
 const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$!|";
 let result = "";
 const charactersLength = characters.length;
 for (let i = 0; i < length; i++) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

export const loginService = async (username, password) => {
 const response = await axios.get(`${API_URL}/users`, {
  params: {
   username,
   password,
  },
 });

 const users = response.data;
 if (users.length > 0) {
  // Simpan user dan token (untuk contoh ini, token bisa berupa ID pengguna)
  const user = users[0];
  const token = generateRandomString(100);
  console.log("token", token);
  console.log("user", user);
  return { user, token };
 } else {
  throw new Error("Invalid username or password");
 }
};

export const logoutService = async () => {
 // Implementasikan logout jika perlu
};