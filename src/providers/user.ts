import { ListCreateUserPayload, User } from "@/types/user";
import { InstanceAxiosUrl } from "./axios";
import { Bearer, Provider, Resource } from "@/types";

export const userProvider: Provider<ListCreateUserPayload, User, User> = {
  findMany: async function (params: {
    token: string;
    username: string;
  }): Promise<User> {
    const { token, username } = params;
    const response = await InstanceAxiosUrl.get<User>(
      `/users/${username}`,
      Bearer(token),
    );
    return response.data;
  },
  save: async function (
    resource: Resource<ListCreateUserPayload>,
  ): Promise<User> {
    const { payload } = resource;
    const response = await InstanceAxiosUrl.put<User>("/users", payload);
    return response.data;
  },

  findOne: async function (params: { token: string }): Promise<User> {
    const { token } = params;
    return await InstanceAxiosUrl.get<User>(
      `/users/Whoami`,
      Bearer(token),
    ).then((res) => res.data);
  },
};
