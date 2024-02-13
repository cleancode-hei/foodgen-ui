import { InstanceAxiosUrl } from "./axios";
import { Ingredient } from "@/types/ingredient";
import { Auth } from "@/types/auth";

export type ObjectReturnIngredient = Omit<Ingredient, "id">;

export const getAllIngredient = async (
  token: string,
  page: number,
  page_size: number,
) => {
  return await InstanceAxiosUrl.get<Ingredient[]>(
    `/ingredients?page=${page}&page_size${page_size}`,
    Auth(token),
  ).then((res) => res.data);
};

export const createIngredient = async (
  token: string,
  ingredientPayload: ObjectReturnIngredient,
) => {
  return await InstanceAxiosUrl.put<Ingredient[]>(
    "/ingredients",
    ingredientPayload,
    Auth(token),
  ).then((res) => res.data);
};
