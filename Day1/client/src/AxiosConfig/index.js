import axios from "axios";


const api = axios.create({
  baseURL: "https://backend-node-vn3x.onrender.com" 
//   process.env.ENV === "DEVLOPMENT"? "http://localhost:3001":
// "https://awdiz-6.com"
,  withCredentials: true, 
});
export default api;