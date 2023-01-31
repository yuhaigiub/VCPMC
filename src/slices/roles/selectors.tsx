import { RootState } from "../../app/store";

export const getAllRolesQuery = (state: RootState) => state.roles.data;
