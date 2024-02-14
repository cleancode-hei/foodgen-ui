export type User = {
  username: string;
  password: string;
  id: string;
  first_name: string;
  last_name: string;
  email: string;
};
export type CreatePayload = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
export type ListCreateUserPayload = CreatePayload[];
