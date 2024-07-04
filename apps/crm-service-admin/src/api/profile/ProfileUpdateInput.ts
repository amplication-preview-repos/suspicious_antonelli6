import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  address?: string | null;
  phoneNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
