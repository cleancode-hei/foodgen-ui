import { Recipe } from "./recipe";
import { Region } from "./region";

export type Meal = {
  id: string;
  name: string;
  region: Region;
  recipe: Recipe;
  image: string;
  download: number;
};
export type ListOfMeal = Meal[];
