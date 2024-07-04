import { User } from "../user/User";

export type Profile = {
  address: string | null;
  createdAt: Date;
  id: string;
  phoneNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
