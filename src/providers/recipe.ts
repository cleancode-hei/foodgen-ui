import { Bearer, Provider, Resource } from "@/types";
import { api } from "@/lib/Api";
import { ListPayloadRecipe, RecipeWithIngredient } from "@/types/recipe";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";

export const recipeProvider: Provider<
  ListPayloadRecipe,
  RecipeWithIngredient,
  RecipeWithIngredient[]
> = {
  findMany: async (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<RecipeWithIngredient[]> => {
    const { token, page, page_size } = params;
    try {
      const response = await api.get<RecipeWithIngredient[]>(
        `/recipes?page=${page}&page_size=${page_size}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  save: async (
    resource: Resource<ListPayloadRecipe>,
  ): Promise<RecipeWithIngredient[]> => {
    const { token, payload } = resource;
    try {
      const response = await api.put<RecipeWithIngredient[]>(
        "/recipes",
        payload,
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
  }): Promise<RecipeWithIngredient> => {
    const { token, id } = params;
    try {
      const response = await api.get<RecipeWithIngredient>(
        `/recipes/${id}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
