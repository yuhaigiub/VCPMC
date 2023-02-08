import { createSlice } from "@reduxjs/toolkit";
import { ContractTable } from "../../types/data";
import { addContract, getAllContracts, overrideContract } from "./reducers";

const initialState: DataType = {
	data: [],
};

const contractsSlice = createSlice({
	name: "contracts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllContracts.fulfilled, (state, action) => {
				state.data = [...action.payload];
			})
			.addCase(addContract.fulfilled, (state, action) => {
				state.data = [...state.data, action.payload];
			})
			.addCase(overrideContract.fulfilled, (state, action) => {
				state.data = state.data.map((contract) => {
					if (contract.key !== action.payload.key) {
						return contract;
					}
					return action.payload;
				});
			});
	},
});

export default contractsSlice.reducer;

interface DataType {
	data: ContractTable[];
}
