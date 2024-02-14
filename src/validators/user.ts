import * as yup from "yup";

export const user = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    first_name: yup.string(),
    last_name: yup.string(),
    email: yup.string().email().required(),
    id: yup.string().required()
  })
  .required();
