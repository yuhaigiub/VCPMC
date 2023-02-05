import { RootState } from "../../app/store";

export const getAllContractsQuery = (state: RootState) => state.contracts.data;
