import { InstanceAxiosUrl } from "./axios";
import { Bearer, Provider, Resource } from "@/types";

export type CreatePayload = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
export type ListCreatePayload = CreatePayload[];
export type ResponseOfUserCreate = {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export const userProvider: Provider<
  ListCreatePayload,
  ResponseOfUserCreate,
  ResponseOfUserCreate
> = {
  findMany: async function (params: {
    token: string;
    username: string;
  }): Promise<ResponseOfUserCreate> {
    const { token, username } = params;
    const response = await InstanceAxiosUrl.get<ResponseOfUserCreate>(
      `/users/${username}`,
      Bearer(token),
    );
    return response.data;
  },
  save: async function (
    resource: Resource<ListCreatePayload>,
  ): Promise<ResponseOfUserCreate> {
    const { payload } = resource;
    const response = await InstanceAxiosUrl.put<ResponseOfUserCreate>(
      "/users",
      payload,
    );
    return response.data;
  },

  findOne: async function (params: {
    token: string;
  }): Promise<ResponseOfUserCreate> {
    const { token } = params;
    return await InstanceAxiosUrl.get<ResponseOfUserCreate>(
      `/users/Whoami`,
      Bearer(token),
    ).then((res) => res.data);
  },
};
