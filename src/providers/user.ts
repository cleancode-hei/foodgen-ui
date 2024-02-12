import { InstanceAxiosUrl } from "./axios";
import { User } from "@/types/user";
export const Auth = (token: string): {} => ({
  headers: {
    Authorization: "Bearer " + token,
  },
});
export type Object = User;

export type CreatePayload = Omit<User, "id">;

export const createUsers = async (userCreate: CreatePayload) => {
  return await InstanceAxiosUrl.put<Object>("/users", userCreate).then(
    (res) => res.data,
  );
};
