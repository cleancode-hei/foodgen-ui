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
    //token: string;
    page: number;
    page_size: number;
  }): Promise<Ingredient[]> => {
    const {
      /* token, page, page_size */
    } = params;
    try {
      const response = await api.get<Ingredient[]>(
        `/ingredients`,
        //  Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findOne: async (
    id /*, params: {
   // token: string;
   // id: string;
  }*/,
  ): Promise<Ingredient> => {
    // const { /*token, */id } = params;
    try {
      const response = await api.get<Ingredient>(
        `/ingredients/${id}`,
        // Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  save: async (resource: Resource<ListIngredient>): Promise<Ingredient[]> => {
    const { /* token,*/ payload } = resource;
    try {
      const response = await api.put<Ingredient[]>(
        "/allergy",
        payload,
        // Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  delete: async (
    id: string,
    params?: {
      /* token: string */
    },
  ): Promise<string> => {
    //const { /*token*/ } = params;
    try {
      const response = await api.get<string>(
        `/ingredients/${id}` /* Bearer(token)*/,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
