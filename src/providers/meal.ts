import { Bearer, Provider } from "@/types";
import { InstanceAxiosUrl } from "./axios";
import { Meal } from "@/types/meal";

export const mealProvider: Provider<string, string, Meal[]> = {
  findOne: async function (params: {
    token: string;
    id: string;
  }): Promise<Meal[]> {
    const { token, id } = params;
    const response = await InstanceAxiosUrl.get<Meal[]>(
      `/meal/${id}`,
      Bearer(token),
    );
    return response.data;
  },
  findByOther: async function (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<Meal[]> {
    const { token, page, page_size } = params;
    const response = await InstanceAxiosUrl.get<Meal[]>(
      `/mealsByRating?page=${page}&page_size=${page_size}`,
      Bearer(token),
    );
    return response.data;
  },
  findMany: async function (params: { token: string }): Promise<Meal[]> {
    const { token } = params;
    const response = await InstanceAxiosUrl.get<Meal[]>(
      `/meals`,
      Bearer(token),
    );
    return response.data;
  },
};
