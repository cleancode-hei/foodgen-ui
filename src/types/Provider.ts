import { Auth } from ".";

interface Params {
  token: string;
  page: number;
  page_size: number;
  id: string;
  username: string;
}

export interface Resource<T> {
  token: string;
  payload: T;
}

export type Provider<T, R, P> = {
  findByOther?: (params: Params) => Promise<R> | Promise<P>;
  findMany?: (params: Params) => Promise<P>;
  findOne?: (params: Params) => Promise<R> | Promise<P>;
  findRecommended?: (params: Params) => Promise<R> | Promise<P>;
  saveBy?: (params: Params) => Promise<T> | Promise<R>;
  save?: (resource: Resource<T>) => Promise<R> | Promise<P>;
  saveMany?: (resources: Resource<T>) => Promise<R>;
  update?: (resource: Resource<T>) => Promise<P>;
  updateMany?: (resources: Resource<T>) => Promise<R>;
  delete?: (params: Params) => Promise<string>;
  deleteMany?: (resources: Resource<T>) => Promise<string>;
  login?: (auth: Auth) => Promise<void>;
  logout?: () => Promise<void>;
  signup?: (auth: Auth) => Promise<void>;
};
