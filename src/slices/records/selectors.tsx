import { RootState } from "../../app/store";

export const getAllRecordsQuery = (state: RootState) => state.accounts.data;
