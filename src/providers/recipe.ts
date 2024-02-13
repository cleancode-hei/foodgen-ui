import { InstanceAxiosUrl } from "./axios";
import { Recipe } from "@/types/recipe";
import { Auth } from "@/types/auth";

export type ObjectReturnRecipe = Omit<Recipe, "id">;
export const getAllRecipe = async (
  token: string,
  page: number,
  page_size: number,
) => {
  return await InstanceAxiosUrl.get<Recipe[]>(
    `/recipes?page=${page}&page_size${page_size}`,
    Auth(token),
  ).then((res) => res.data);
};
