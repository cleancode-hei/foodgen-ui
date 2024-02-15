import axios from "axios";
const API_URL: string = import.meta.env.VITE_API_URL;
export const API = axios.create({
  baseURL: API_URL,
});
