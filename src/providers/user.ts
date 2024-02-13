import { InstanceAxiosUrl } from "./axios";
import { User } from "@/types/user";
import { Auth } from "@/types/auth";

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
  return await InstanceAxiosUrl.put<User>("/users", userCreate).then(
    (res) => res.data,
  );
};

export const loginUser = async (userLogin: UserLogin) => {
  return await InstanceAxiosUrl.post<string>("/users/login", userLogin).then(
    (res) => res.data,
  );
};

export const singupUser = async (user: CreatePayload) => {
  return await InstanceAxiosUrl.post<string>("/users/singup", user).then(
    (res) => res.data,
  );
};

export const logoutUser = async (token: string) => {
  return await InstanceAxiosUrl.get<string>("/users/logout", Auth(token)).then(
    (res) => res.data,
  );
};

export const whoami = async (token: string) => {
  return await InstanceAxiosUrl.get<Objectwhoami>(
    "/users/whoami",
    Auth(token),
  ).then((res) => res.data);
};

export const getUserByUserName = async (token: string, username: string) => {
  return await InstanceAxiosUrl.get<Objectwhoami>(
    `/users/${username}`,
    Auth(token),
  ).then((res) => res.data);
};
