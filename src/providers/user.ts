import { InstanceAxiosUrl } from "./axios";
import { User } from "@/types/user";
export const Auth = (token: string): {} => ({
  headers: {
    Authorization: "Bearer " + token,
  },
});

type Role = "USER" | "ADMIN";

export type Object = User;

export type Objectwhoami = User & {
  role: Role;
};
export type CreatePayload = Omit<User, "id">;

export type UserLogin = {
  email: string;
  password: string;
};

export const createUsers = async (userCreate: CreatePayload) => {
  return await InstanceAxiosUrl.put<Object>("/users", userCreate).then(
    (res) => res.data,
  );
};

export const loginUser = async (userLogin: UserLogin) => {
  return await InstanceAxiosUrl.post<String>("/users/login", userLogin).then(
    (res) => res.data,
  );
};

export const whoami = async (token: string) => {
  return await InstanceAxiosUrl.get<Objectwhoami>(
    "/users/whoami",
    Auth(token),
  ).then((res) => res.data);
};
