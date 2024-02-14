import { InstanceAxiosUrl } from "./axios";
import {
  Ingredient,
  ListIngredient,
  payloadIngredient,
} from "@/types/ingredient";
import { Bearer, Provider, Resource } from "@/types";

export const ingredientProvider: Provider<
  ListIngredient,
  payloadIngredient[],
  Ingredient[]
> = {
  findMany: async function (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<Ingredient[]> {
    const { token, page, page_size } = params;
    const response = await InstanceAxiosUrl.get<Ingredient[]>(
      `/ingredients?page=${page}&page_size=${page_size}`,
      Bearer(token),
    );
    return response.data;
  },
  findOne: async function (params: {
    token: string;
    id: string;
  }): Promise<Ingredient[]> {
    const { token, id } = params;
    const response = await InstanceAxiosUrl.get<Ingredient[]>(
      `/ingredients/${id}`,
      Bearer(token),
    );
    return response.data;
  },
  save: async function (
    resource: Resource<ListIngredient>,
  ): Promise<payloadIngredient[]> {
    const { token, payload } = resource;
    const response = await InstanceAxiosUrl.put<payloadIngredient[]>(
      "/allergy",
      payload,
      Bearer(token),
    );
    return response.data;
  },
};
