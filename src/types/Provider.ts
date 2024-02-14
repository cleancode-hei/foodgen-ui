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
  findMany?: (params: Params) => Promise<R>;
  findOne?: (params: Params) => Promise<R>;
  save?: (resource: Resource<T>) => Promise<R>;
  saveMany?: (resources: Resource<T>) => Promise<R>;
  update?: (resource: Resource<T>) => Promise<R>;
  updateMany?: (resources: Resource<T>) => Promise<R>;
  delete?: (resource: Resource<T>) => Promise<R>;
  deleteMany?: (resources: Resource<T>) => Promise<R>;
  login?: (auth: Auth) => Promise<R>;
  logout?: () => Promise<R>;
};
