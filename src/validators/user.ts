import * as yup from "yup";

export const user = yup
  .object({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string(),
    email: yup.string().email("Email format is not valid.").required("Email is required."),
    id: yup.string()
  })
  .required();
