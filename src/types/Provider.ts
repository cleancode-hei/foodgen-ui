import { auth } from "../validators";
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

interface Resource {
  token: string;
  payload: User | Region | Recipe | Meal | Allergy | Ingredient;
}

export type Provider = {
  findMany?: (params: Params) => Promise<void | unknown>;
  findOne?: (params: Params) => Promise<void | unknown>;
  save?: (resource: Resource) => Promise<void | unknown>;
  saveMany?: (resources: Resource) => Promise<void | unknown>;
  update?: (resource: Resource) => Promise<void | unknown>;
  updateMany?: (resources: Resource) => Promise<void | unknown>;
  delete?: (resource: Resource) => Promise<void | unknown>;
  deleteMany?: (resources: Resource) => Promise<void | unknown>;
  login?: (Auth: auth) => Promise<void | unknown>;
  logout?: () => Promise<void | unknown>;
};
