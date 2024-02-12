import { Auth } from ".";

export type Provider = {
  findMany?: (params: string | number) => Promise<void | unknown>;
  findOne?: (params: string | number) => Promise<void | unknown>;
  save?: (resource: unknown) => Promise<void | unknown>;
  saveMany?: (resources: unknown) => Promise<void | unknown>;
  update?: (resource: unknown) => Promise<void | unknown>;
  updateMany?: (resources: unknown) => Promise<void | unknown>;
  delete?: (resource: unknown) => Promise<void | unknown>;
  deleteMany?: (resources: unknown) => Promise<void | unknown>;
  login?: (auth: Auth) => Promise<void | unknown>;
  logout?: () => Promise<void | unknown>;
};
