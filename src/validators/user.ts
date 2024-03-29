import * as yup from "yup";

export const user = yup
  .object({
    id: yup.string(),
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required(),
    username: yup.string().required("Username is required."),
    email: yup
      .string()
      .email("Email format is not valid.")
      .required("Email is required."),
    password: yup.string().required("Password is required"),
    //allergies: yup.array(yup.string().required()).required(),
    //preferences: yup.array(yup.string().required()).required(),
  })
  .required();
