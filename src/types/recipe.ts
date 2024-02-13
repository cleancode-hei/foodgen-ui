import { Ingredient } from "./ingredient";

export type Recipe = {
  name: string;
  readme: string;
  id: string;
  ingredient: Ingredient;
};
