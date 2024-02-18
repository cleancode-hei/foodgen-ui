import { api } from "@/lib";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { Allergy, Bearer } from "@/types";

export const allergyProvider = {
  findMany: async (token: string): Promise<Allergy[]> => {
    try {
      const response = await api.get<Allergy[]>(`/allergies`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  saveOrUpdate: async (
    allergies: Allergy[],
    token: string,
  ): Promise<Allergy[]> => {
    try {
      const response = await api.put<Allergy[]>(
        "/allergy",
        allergies,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },

  findOne: async (id: string, token: string): Promise<Allergy[]> => {
    try {
      const response = await api.get<Allergy[]>(
        `/allergies/${id}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
