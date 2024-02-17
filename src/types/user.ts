import { Allergy } from "./allergy";

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  Allergies: Allergy;
  Preference: string[];
};

export type UserPayload = Omit<User, "id">;
export type ListOfUser = User[];
