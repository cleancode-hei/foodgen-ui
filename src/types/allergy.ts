import { Ingredient } from "./Ingredient";
import { User } from "./User";

export type Allergy = {
  user: User;
  ingredient: Ingredient;
  id: string;
};

export type Response = {
  id: string;
  ingredient_name: string;
};
