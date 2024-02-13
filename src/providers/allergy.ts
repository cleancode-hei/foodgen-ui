import { InstanceAxiosUrl } from "./axios";
import { Allergy } from "@/types/allergy";
import { Auth } from "@/types/auth";

export type ObjectReturnAllergy = Omit<Allergy, "id">;

export const getAllAllergy = async (
  token: string,
  page: number,
  page_size: number,
) => {
  return await InstanceAxiosUrl.get<Allergy[]>(
    `/allergy?page=${page}&page_size${page_size}`,
    Auth(token),
  ).then((res) => res.data);
};
