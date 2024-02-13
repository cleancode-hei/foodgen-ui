import { Ingredient } from "./ingredient";
import { User } from "./user";

export type Allergy = {
  user: User;
  ingredient: Ingredient;
  id: string;
};
