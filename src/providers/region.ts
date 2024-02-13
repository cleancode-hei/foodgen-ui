import { InstanceAxiosUrl } from "./axios";
import { Region } from "@/types/region";
import { Auth } from "@/types/auth";

export const getAllRegions = async (
  token: string,
  page: number,
  page_size: number,
) => {
  return await InstanceAxiosUrl.put<Region[]>(
    `/regions?page=${page}&page_size${page_size}`,
    Auth(token),
  ).then((res) => res.data);
};
export const createRegion = async (token: string, name: string) => {
  return await InstanceAxiosUrl.put<Region[]>(
    "/regions",
    name,
    Auth(token),
  ).then((res) => res.data);
};
