import { Auth } from "../validators";
import { Allergy } from "./allergy";
import { Ingredient } from "./ingredient";
import { Meal } from "./meal";
import { Recipe } from "./recipe";
import { Region } from "./region";
import { User } from "./user";

interface Params {
  token: string;
  page: number;
  page_size: number;
  id: number;
}

export interface Resource<T> {
  token: string;
  payload: T;
}

export type Provider<T> = {
  findMany?: (params: Params) => Promise<void | unknown>;
  findOne?: (params: Params) => Promise<void | unknown>;
  save?: (resource: Resource<T>) => Promise<T>;
  saveMany?: (resources: Resource<T>) => Promise<T>;
  update?: (resource: Resource<T>) => Promise<T>;
  updateMany?: (resources: Resource<T>) => Promise<T>;
  delete?: (resource: Resource<T>) => Promise<T>;
  deleteMany?: (resources: Resource<T>) => Promise<T>;
  login?: (Auth: Auth) => Promise<void | unknown>;
  logout?: () => Promise<void | unknown>;
};
