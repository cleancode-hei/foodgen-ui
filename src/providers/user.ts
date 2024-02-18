import { Provider, Resource } from "@/types";
import { api } from "@/lib/Api";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { Bearer } from "@/types";
import { User, ListOfUser, UserPayload } from "@/types/user";

export const UserProvider: Provider<UserPayload[], User, ListOfUser> = {
  save: async (resource: Resource<UserPayload[]>): Promise<ListOfUser> => {
    const { /*token, */payload } = resource;
    try {
      const response = await api.put<ListOfUser>(
        "/users",
        payload,
        //Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findByOther: async (params: {/* token: string */}): Promise<User> => {
    const { /*token*/ } = params;
    try {
      const response = await api.get<User>("/users/whoami",/* Bearer(token)*/);
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },

  findOne: async (username,params: {
   // token: string;
   // username: string;
  }): Promise<User> => {
   // const {/* token,*/ username } = params;
    try {
      const response = await api.get<User>(`/users/${username}`,/* Bearer(token)*/);
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },

  findMany: async() => {

  },
  delete: async (id: string, params?) => {

  },

};
