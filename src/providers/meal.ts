import { Provider } from "@/types";
import { api } from "@/lib/Api";
import { handleAxiosError } from "@/lib/handleAxiosError";
import { AxiosError } from "axios";
import { Bearer } from "@/types";
import { ListOfMeal, Meal } from "@/types/meal";

export const MealProvider: Provider<string, Meal, ListOfMeal> = {
  findMany: async (params: { token: string }): Promise<ListOfMeal> => {
    const { token } = params;
    try {
      const response = await api.get<ListOfMeal>(`/meals`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findRecommended: async (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<ListOfMeal> => {
    const { token, page, page_size } = params;
    try {
      const response = await api.get<ListOfMeal>(
        `/recommendedMeals?page=${page}&page_size=${page_size}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  saveBy: async (params: { token: string; id: string }): Promise<string> => {
    const { token, id } = params;
    try {
      const response = await api.post<string>(
        `/meals/download/${id}`,
        id,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
  findByOther: async (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<ListOfMeal> => {
    const { token, page, page_size } = params;
    try {
      const response = await api.get<ListOfMeal>(
        `/mealsByRating?page=${page}&page_size=${page_size}`,
        Bearer(token),
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },

  findOne: async (params: { token: string; id: string }): Promise<Meal> => {
    const { token, id } = params;
    try {
      const response = await api.get<Meal>(`/meal/${id}`, Bearer(token));
      return response.data;
    } catch (error) {
      handleAxiosError(error as AxiosError);
    }
  },
};
