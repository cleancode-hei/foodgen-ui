import { Auth } from ".";

interface Params {
  // token: string;
  page: number;
  page_size: number;
}

export interface Resource<T> {
  //  token: string;
  payload: T;
}

export type Provider<T, R, P> = {
  findByOther?: (params: Params) => Promise<R> | Promise<P>;
  findMany: (params: Params) => Promise<P>;
  findOne: (id: string, params: Params) => Promise<R> | Promise<P>;
  save: (resource: Resource<T>) => Promise<R> | Promise<P>;
  saveMany?: (resources: Resource<T>) => Promise<R>;
  update?: (resource: Resource<T>) => Promise<P>;
  updateMany?: (resources: Resource<T>) => Promise<R>;
  delete: (id: string, params?: Params) => Promise<string>;
  deleteMany?: (resources: Resource<T>) => Promise<string>;
  login?: (auth: Auth) => Promise<void>;
  logout?: () => Promise<void>;
  signup?: (auth: Auth) => Promise<void>;
};
