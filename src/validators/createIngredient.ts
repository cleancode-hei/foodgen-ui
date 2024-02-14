import * as yup from "yup";

export const createIngredient = yup
  .object({
    name: yup.string().required("Name is required.")
  })
  .required();
