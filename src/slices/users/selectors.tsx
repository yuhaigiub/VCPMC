import { RootState } from "../../app/store";

export const getAllUsersQuery = (state: RootState) => state.users.data;
