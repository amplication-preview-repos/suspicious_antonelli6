import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
