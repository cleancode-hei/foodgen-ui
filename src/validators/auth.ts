import * as yup from "yup";

export const auth = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export type Auth = yup.InferType<typeof auth>;
