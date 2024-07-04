import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  address?: string | null;
  phoneNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
