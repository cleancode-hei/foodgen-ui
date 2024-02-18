import { Recipe } from "./Recipe";
import { Region } from "./Region";

export type Meal = {
  id: string;
  name: string;
  region: Region;
  recipe: Recipe;
  image: string;
  download: number;
};
