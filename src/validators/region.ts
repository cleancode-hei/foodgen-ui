import * as yup from "yup";

export const region = yup
  .object({
    name: yup.string().required("Name is required."),
    id: yup.string(),
  })
  .required();
