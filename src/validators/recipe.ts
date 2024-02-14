import * as yup from "yup";

export const recipe = yup
  .object({
    name: yup.string().required(),
    readme: yup.string().required(),
    id: yup.string().required()
  })
  .required();
