import { Ingredient, Pagination } from "@/types";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { api } from "@/lib";

export const ingredientProvider = {
  findMany: async (pagination: Pagination): Promise<Ingredient[]> => {
    const { page, page_size } = pagination;
    try {
      const response = await api.get<Ingredient[]>(
        `/ingredients?page=${page}&page_size=${page_size}`,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  /*findOne: async (params: {
    token: string;
    id: string;
  }): Promise<Ingredient> => {
    const { token, id } = params;
    try {
      const response = await api.get<Ingredient>(
        `/ingredients/${id}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  save: async (resource: Resource<ListIngredient>): Promise<Ingredient[]> => {
    const { token, payload } = resource;
    try {
      const response = await api.put<Ingredient[]>(
        "/allergy",
        payload,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },*/
};
