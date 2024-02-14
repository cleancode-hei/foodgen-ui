import { Auth } from "../validators";

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

export type Provider<T, R> = {
  findMany?: (params: Params) => Promise<void | unknown>;
  findOne?: (params: Params) => Promise<void | unknown>;
  save?: (resource: Resource<T>) => Promise<R>;
  saveMany?: (resources: Resource<T>) => Promise<R>;
  update?: (resource: Resource<T>) => Promise<R>;
  updateMany?: (resources: Resource<T>) => Promise<R>;
  delete?: (resource: Resource<T>) => Promise<R>;
  deleteMany?: (resources: Resource<T>) => Promise<R>;
  login?: (auth: Auth) => Promise<void | unknown>;
  logout?: () => Promise<void | unknown>;
};
