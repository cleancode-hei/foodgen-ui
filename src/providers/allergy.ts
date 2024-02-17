import { Provider, Resource } from "@/types";
import { api } from "@/lib/Api";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { Bearer } from "@/types";
import { Allergy } from "@/types/allergy";

export const allergyProvider: Provider<string[], Allergy, Allergy[]> = {
  findMany: async (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<Allergy[]> => {
    const { token, page, page_size } = params;
    try {
      const response = await api.get<Allergy[]>(
        `/allergy?page=${page}&page_size=${page_size}`,
        Bearer(token)
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  save: async (resource: Resource<string[]>): Promise<Allergy[]> => {
    const { token, payload } = resource;
    try {
      const response = await api.put<Allergy[]>(
        "/allergy",
        payload,
        Bearer(token)
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },

  findOne: async (params: {
    token: string;
    id: string;
  }): Promise<Allergy[]> => {
    const { token, id } = params;
    try {
      const response = await api.get<Allergy[]>(
        `/allergy/${id}`,
        Bearer(token)
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
