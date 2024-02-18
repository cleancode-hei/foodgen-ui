import { Recipe, Region } from "@/types";
import * as yup from "yup";
import { region } from "./region";
import { recipe } from "./recipe";

export const meal = yup
  .object({
    id: yup.string(),
    name: yup.string().required(),
    region: yup.object<Region>(region).required(),
    recipe: yup.object<Recipe>(recipe).required(),
    image: yup.string().required(),
    download: yup.number().required(),
  })
  .required();
