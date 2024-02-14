import * as yup from "yup";

export const createUser = yup
  .object({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required"),
    first_name: yup.string(),
    last_name: yup.string(),
    email: yup.string().email("Email format is not valid.").required("Email is required.")
  })
  .required();
