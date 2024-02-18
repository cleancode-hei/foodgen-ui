import { Bearer, Pagination } from "@/types";
import { Region } from "@/types";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { api } from "@/lib";
export const regionProvider = {
  findMany: async (
    pagination: Pagination,
    token: string,
  ): Promise<Region[]> => {
    const { page, page_size } = pagination;
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
  saveOrUpdate: async (regions: Region[], token: string): Promise<Region[]> => {
    try {
      const response = await api.put<Region[]>(
        "/regions",
        regions,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },

  findOne: async (id: string, token: string): Promise<Region> => {
    try {
      const response = await api.get<Region>(`/regions/${id}`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  delete: async (id: string, token: string): Promise<string> => {
    try {
      const response = await api.get<string>(`/regions/${id}`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
