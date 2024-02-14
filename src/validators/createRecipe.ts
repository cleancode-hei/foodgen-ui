import * as yup from "yup";

export const createRecipe = yup
  .object({
    name: yup.string().required("Name is required."),
    readme: yup.string().required("Please describe the recipe.")
  })
  .required();
