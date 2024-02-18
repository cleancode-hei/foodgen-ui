import { Auth } from "@/types";
import axios from "axios";

const API_URL: string = import.meta.env.VITE_API_URL;

export const authProvider = {
  login: async (auth: Auth): Promise<void> => {
    const response = await axios.post(`${API_URL}/users/login`, auth);
    if (response.status !== 200) {
      Promise.reject(response.statusText);
    }
    const token: string = response.data;
    sessionStorage.setItem("token", token);
    Promise.resolve();
  },
  logout: async (): Promise<void> => {
    sessionStorage.removeItem("token");
    Promise.resolve();
  },
};
