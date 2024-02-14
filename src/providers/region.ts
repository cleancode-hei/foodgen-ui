import { Bearer, Provider, Resource } from "@/types";
import { InstanceAxiosUrl } from "./axios";
import { ListPayloadRegion, Region } from "@/types/region";

export const regionProvider: Provider<ListPayloadRegion, Region[], Region[]> = {
  findMany: async function (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<Region[]> {
    const { token, page, page_size } = params;
    const response = await InstanceAxiosUrl.get<Region[]>(
      `/regions?page=${page}&page_size=${page_size}`,
      Bearer(token),
    );
    return response.data;
  },
  save: async function (
    resource: Resource<ListPayloadRegion>,
  ): Promise<Region[]> {
    const { token, payload } = resource;
    const response = await InstanceAxiosUrl.put<Region[]>(
      "/regions",
      payload,
      Bearer(token),
    );
    return response.data;
  },

  findOne: async function (params: {
    token: string;
    id: string;
  }): Promise<Region[]> {
    const { token, id } = params;
    return await InstanceAxiosUrl.get<Region[]>(
      `/regions/${id}`,
      Bearer(token),
    ).then((res) => res.data);
  },
  delete: async function (params: {
    token: string;
    id: string;
  }): Promise<string> {
    const { token, id } = params;
    return await InstanceAxiosUrl.get<string>(
      `/regions/${id}`,
      Bearer(token),
    ).then((res) => res.data);
  },
};
