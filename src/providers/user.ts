import { ListCreateUserPayload, User } from "@/types/user";
import { InstanceAxiosUrl } from "./axios";
import { Bearer, Provider, Resource } from "@/types";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";

export const userProvider: Provider<ListCreateUserPayload, User, User> = {
  findMany: async function (params: {
    token: string;
    username: string;
  }): Promise<User> {
    const { token, username } = params;
    try {
      const response = await InstanceAxiosUrl.get<User>(
        `/users/${username}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      throw handleAxiosError(error as AxiosError);
    }
  },
  save: async function (
    resource: Resource<ListCreateUserPayload>,
  ): Promise<User> {
    const { payload } = resource;
    try {
      const response = await InstanceAxiosUrl.put<User>("/users", payload);
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },

  findOne: async function (params: { token: string }): Promise<User> {
    const { token } = params;
    try {
      const response = await InstanceAxiosUrl.get<User>(
        `/users/Whoami`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
