export type User = {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  Allergies: string[];
  Preference: string[];
};

export type UserPayload = Omit<User, "id">;
export type ListOfUser = User[];
