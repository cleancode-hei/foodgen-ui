import { Ingredient, ListIngredient } from "@/types/ingredients";
import { Bearer, Provider, Resource } from "@/types";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { api } from "@/lib/Api";

export const ingredientProvider: Provider<
  ListIngredient,
  Ingredient,
  Ingredient[]
> = {
  findMany: async (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<Ingredient[]> => {
    const { token, page, page_size } = params;
    try {
      const response = await api.get<Ingredient[]>(
        `/ingredients?page=${page}&page_size=${page_size}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findOne: async (params: {
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
  },
};
