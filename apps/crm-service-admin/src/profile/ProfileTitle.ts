import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "address";

export const ProfileTitle = (record: TProfile): string => {
  return record.address?.toString() || String(record.id);
};
