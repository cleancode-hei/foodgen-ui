import { Ingredient } from "./ingredients";
import { User } from "./user";

export type Allergy = {
  user: User;
  ingredient: Ingredient;
  id: string;
};

export type Response = {
  id: string;
  ingredient_name: string;
};
