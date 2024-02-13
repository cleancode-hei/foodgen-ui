import { Recipe } from "./recipe";
import { Region } from "./region";

export type Meal = {
  name: string;
  image: string;
  id: string;
  region: Region;
  recipe: Recipe;
  email: string;
  download: number;
  Preferences: string[];
};
