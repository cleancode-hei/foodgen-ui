import * as yup from "yup";

export const ingredient = yup
  .object({
    name: yup.string().required("Name is required."),
    id: yup.string()
  })
  .required();
