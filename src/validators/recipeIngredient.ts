import { Ingredient, Recipe } from "@/types";
import * as yup from "yup";
import { recipe } from "./recipe";
import { ingredient } from "./ingredient";

export const recipeIngredient = yup
  .object({
    recipe: yup.object<Recipe>(recipe).required(),
    ingredient: yup.object<Ingredient>(ingredient).required(),
  })
  .required();
