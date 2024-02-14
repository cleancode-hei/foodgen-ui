import { Provider, Resource } from "@/types";
import { InstanceAxiosUrl } from "./axios";
import { Allergy } from "@/types/allergy";
import { Bearer } from "@/types";

export type Response = {
  id: string;
  ingredient_name: string;
};

export const allergyProvider: Provider<string, Response> = {
  findMany: async function (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<Allergy[]> {
    const { token, page, page_size } = params;
    const response = await InstanceAxiosUrl.get<Allergy[]>(
      `/allergy?page=${page}&page_size=${page_size}`,
      Bearer(token),
    );
    return response.data;
  },
  save: async function (resource: Resource<string>): Promise<Response> {
    const { token, payload } = resource;
    const response = await InstanceAxiosUrl.put<Response>(
      "/allergy",
      payload,
      Bearer(token),
    );
    return response.data;
  },

  findOne: async function (params: {
    token: string;
    id: number;
  }): Promise<Allergy> {
    const { token, id } = params;
    return await InstanceAxiosUrl.get<Allergy>(
      `/allergy/${id}`,
      Bearer(token),
    ).then((res) => res.data);
  },
};
