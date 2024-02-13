import { InstanceAxiosUrl } from "./axios";
import { Meal } from "@/types/meal";
import { Auth } from "@/types";

export const getMealRandom = async (token: string) => {
  return await InstanceAxiosUrl.get<Meal[]>("/meals", Auth(token)).then(
    (res) => res.data,
  );
};

export const getMealByRating = async (
  token: string,
  page: number,
  page_size: number,
) => {
  return await InstanceAxiosUrl.get<Meal[]>(
    `/meals?page=${page}&page_size${page_size}`,
    Auth(token),
  ).then((res) => res.data);
};

export const getMealByid = async (token: string, id: number) => {
  return await InstanceAxiosUrl.get<Meal>(`/meals/${id}`, Auth(token)).then(
    (res) => res.data,
  );
};
