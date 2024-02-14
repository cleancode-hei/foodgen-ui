import { Bearer, Provider, Resource } from "@/types";
import { InstanceAxiosUrl } from "./axios";
import { ListPayloadRicipe, RecipeWithIngredient } from "@/types/recipe";

export const recipeProvider: Provider<
  ListPayloadRicipe,
  RecipeWithIngredient[],
  RecipeWithIngredient[]
> = {
  findMany: async function (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<RecipeWithIngredient[]> {
    const { token, page, page_size } = params;
    const response = await InstanceAxiosUrl.get<RecipeWithIngredient[]>(
      `/recipes?page=${page}&page_size=${page_size}`,
      Bearer(token),
    );
    return response.data;
  },
  save: async function (
    resource: Resource<ListPayloadRicipe>,
  ): Promise<RecipeWithIngredient[]> {
    const { token, payload } = resource;
    const response = await InstanceAxiosUrl.put<RecipeWithIngredient[]>(
      "/recipes",
      payload,
      Bearer(token),
    );
    return response.data;
  },

  findOne: async function (params: {
    token: string;
    id: string;
  }): Promise<RecipeWithIngredient[]> {
    const { token, id } = params;
    return await InstanceAxiosUrl.get<RecipeWithIngredient[]>(
      `/recipes/${id}`,
      Bearer(token),
    ).then((res) => res.data);
  },
};
