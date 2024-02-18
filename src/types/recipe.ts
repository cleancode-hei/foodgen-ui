import { Ingredient } from "./ingredients";

export type Recipe = {
  id: string;
  name: string;
  readme: string;
};

export type PayloadRecipe = Omit<Recipe, "id">;
export type ListPayloadRecipe = PayloadRecipe[];
export type RecipeWithIngredient = {
  recipe: Recipe;
} & {
  ingredient: Ingredient;
};
