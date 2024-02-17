import { Bearer, Provider, Resource } from "@/types";
import { ListPayloadRegion, Region } from "@/types/region";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { api } from "@/lib/Api";
export const regionProvider: Provider<ListPayloadRegion, Region, Region[]> = {
  findMany: async (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<Region[]> => {
    const { token, page, page_size } = params;
    try {
      const response = await api.get<Region[]>(
        `/regions?page=${page}&page_size=${page_size}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  save: async (resource: Resource<ListPayloadRegion>): Promise<Region[]> => {
    const { token, payload } = resource;
    try {
      const response = await api.put<Region[]>(
        "/regions",
        payload,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },

  findOne: async (params: { token: string; id: string }): Promise<Region> => {
    const { token, id } = params;
    try {
      const response = await api.get<Region>(`/regions/${id}`, Bearer(token));

      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  delete: async (params: { token: string; id: string }): Promise<string> => {
    const { token, id } = params;
    try {
      const response = await api.get<string>(`/regions/${id}`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
