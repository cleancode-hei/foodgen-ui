import { api } from "@/lib";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { Bearer } from "@/types";
import { User } from "@/types";

export const userProvider = {
  save: async (user: User): Promise<void> => {
    try {
      const response = await api.post("/users/signup", user);
      if (response.status !== 200) {
        Promise.reject(response.statusText);
      }
      const token: string = response.data;
      sessionStorage.setItem("token", token);
      Promise.resolve();
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findByOther: async (params: { token: string }): Promise<User> => {
    const { token } = params;
    try {
      const response = await api.get<User>("/users/whoami", Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },

  findOne: async (params: {
    token: string;
    username: string;
  }): Promise<User> => {
    const { token, username } = params;
    try {
      const response = await api.get<User>(`/users/${username}`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
