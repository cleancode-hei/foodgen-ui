import {
  Ingredient,
  ListIngredient,
  payloadIngredient,
} from "@/types/ingredient";
import { Bearer, Provider, Resource } from "@/types";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { InstanceAxiosUrl } from "@/lib/axios";

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
    try {
      const response = await InstanceAxiosUrl.get<Ingredient[]>(
        `/ingredients?page=${page}&page_size=${page_size}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findOne: async function (params: {
    token: string;
    id: string;
  }): Promise<Ingredient[]> {
    const { token, id } = params;
    try {
      const response = await InstanceAxiosUrl.get<Ingredient[]>(
        `/ingredients/${id}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  save: async function (
    resource: Resource<ListIngredient>,
  ): Promise<payloadIngredient[]> {
    const { token, payload } = resource;
    try {
      const response = await InstanceAxiosUrl.put<payloadIngredient[]>(
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
