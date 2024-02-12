import { Recipe } from "./recipe";
import { Region } from "./region";

export type User = {
  name: string;
  image: string;
  id: string;
  region: Region;
  recipe: Recipe;
  email: string;
  download: number;
  Preferences: string[];
};
