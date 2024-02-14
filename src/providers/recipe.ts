import { Bearer, Provider, Resource } from "@/types";
import { InstanceAxiosUrl } from "./axios";
import { ListPayloadRicipe, Recipe } from "@/types/recipe";

export const recipeProvider: Provider<ListPayloadRicipe, Recipe[], Recipe[]> = {
  findMany: async function (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<Recipe[]> {
    const { token, page, page_size } = params;
    const response = await InstanceAxiosUrl.get<Recipe[]>(
      `/recipes?page=${page}&page_size=${page_size}`,
      Bearer(token),
    );
    return response.data;
  },
  save: async function (
    resource: Resource<ListPayloadRicipe>,
  ): Promise<Recipe[]> {
    const { token, payload } = resource;
    const response = await InstanceAxiosUrl.put<Recipe[]>(
      "/recipes",
      payload,
      Bearer(token),
    );
    return response.data;
  },

  findOne: async function (params: {
    token: string;
    id: string;
  }): Promise<Recipe[]> {
    const { token, id } = params;
    return await InstanceAxiosUrl.get<Recipe[]>(
      `/recipes/${id}`,
      Bearer(token),
    ).then((res) => res.data);
  },
};
