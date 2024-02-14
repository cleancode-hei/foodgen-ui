import { Auth } from "../validators";

interface Params {
  token: string;
  page: number;
  page_size: number;
  id: string;
}

export interface Resource<T> {
  token: string;
  payload: T;
}

export type Provider<T, R, P> = {
  findByOther?: (params: Params) => Promise<P>;
  findMany?: (params: Params) => Promise<P>;
  findOne?: (params: Params) => Promise<P>;
  save?: (resource: Resource<T>) => Promise<R>;
  saveMany?: (resources: Resource<T>) => Promise<R>;
  update?: (resource: Resource<T>) => Promise<P>;
  updateMany?: (resources: Resource<T>) => Promise<R>;
  delete?: (resource: Resource<T>) => Promise<R>;
  deleteMany?: (resources: Resource<T>) => Promise<P>;
  login?: (auth: Auth) => Promise<R>;
  logout?: () => Promise<R>;
};
