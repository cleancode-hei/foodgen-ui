import { api } from "@/lib";
import { Pagination, Recipe, Bearer } from "@/types";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";

export const recipeProvider = {
  findMany: async (
    pagination: Pagination,
    token: string,
  ): Promise<Recipe[]> => {
    const { page, page_size } = pagination;
    try {
      const response = await api.get<Recipe[]>(
        `/recipes?page=${page}&page_size=${page_size}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  saveOrUpdate: async (recipes: Recipe[], token: string) => {
    try {
      const response = await api.put<Recipe[]>(
        "/recipes",
        recipes,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findOne: async (id: string, token: string): Promise<Recipe> => {
    try {
      const response = await api.get<Recipe>(`/recipes/${id}`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
