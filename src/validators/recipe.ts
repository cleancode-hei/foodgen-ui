import * as yup from "yup";

export const recipe = yup
  .object({
    name: yup.string().required("Name is required."),
    readme: yup.string().required("Please describe the recipe."),
    id: yup.string()
  })
  .required();
