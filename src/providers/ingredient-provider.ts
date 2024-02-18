import { Ingredient, Pagination, Bearer } from "@/types";
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
  findOne: async (id: string, token: string): Promise<Ingredient> => {
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
  saveOrUpdate: async (
    ingredients: Ingredient[],
    token: string,
  ): Promise<Ingredient[]> => {
    try {
      const response = await api.put<Ingredient[]>(
        "/ingredients",
        ingredients,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
