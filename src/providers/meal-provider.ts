import { api } from "@/lib";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { Bearer, Meal, Pagination } from "@/types";

export const MealProvider = {
  findMany: async (token: string): Promise<Meal[]> => {
    try {
      const response = await api.get<Meal[]>(`/meals`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findRecommended: async (
    pagination: Pagination,
    token: string,
  ): Promise<Meal[]> => {
    const { page, page_size } = pagination;
    try {
      const response = await api.get<Meal[]>(
        `/recommendedMeals?page=${page}&page_size=${page_size}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findByRating: async (
    pagination: Pagination,
    token: string,
  ): Promise<Meal[]> => {
    const { page, page_size } = pagination;
    try {
      const response = await api.get<Meal[]>(
        `//mealsByRating?page=${page}&page_size=${page_size}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findOne: async (id: string, token: string): Promise<Meal> => {
    try {
      const response = await api.get<Meal>(`/meal/${id}`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
