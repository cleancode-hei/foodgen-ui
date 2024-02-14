import * as yup from "yup";

export const createRegion = yup
  .object({
    name: yup.string().required("Name is required.")
  })
  .required();
