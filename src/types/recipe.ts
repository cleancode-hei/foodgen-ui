import { Ingredient } from "./ingredient";

export type Recipe = {
  id: string;
  name: string;
  readme: string;
};

export type PayloadRecipe = Omit<Recipe, "id">;
export type ListPayloadRicipe = PayloadRecipe[];
export type RecipeWithIngredient = {
  recipe: Recipe;
} & {
  ingredient: Ingredient;
};
