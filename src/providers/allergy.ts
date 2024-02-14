import { Provider } from "@/types";
import { InstanceAxiosUrl } from "./axios";
import { Allergy } from "@/types/allergy";
import { Bearer } from "@/types";
export type ObjectReturnAllergy = Omit<Allergy, "id">;

export const allergyProvider: Provider = {
  findMany: async function (params: {
    token: string;
    page: number;
    page_size: number;
  }): Promise<Allergy[]> {
    const { token, page, page_size } = params;
    const response = await InstanceAxiosUrl.get<Allergy[]>(
      `/allergy?page=${page}&page_size=${page_size}`,
      Bearer(token),
    );
    return response.data;
  }, // Une fonction pour créer une nouvelle allergie
  save: async function (resource: {
    token: string;
    payload: ObjectReturnAllergy;
  }): Promise<Allergy> {
    const { token, payload } = resource;
    const response = await InstanceAxiosUrl.post<Allergy>(
      "/allergy",
      payload,
      Bearer(token),
    );
    return response.data;
  },

  findOne: async function (params: {
    token: string;
    id: number;
  }): Promise<Allergy> {
    const { token, id } = params;
    return await InstanceAxiosUrl.get<Allergy>(
      `/allergy/${id}`,
      Bearer(token),
    ).then((res) => res.data);
  },
};
