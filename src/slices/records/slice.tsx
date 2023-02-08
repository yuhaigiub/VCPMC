import { createSlice } from "@reduxjs/toolkit";
import { RecordTable } from "../../types/data";
import { addRecord, getAllRecords, updateRecord } from "./reducers";

const initialState: DataType = {
	data: [],
};

const accountsSlice = createSlice({
	name: "accounts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllRecords.fulfilled, (state, action) => {
				state.data = [...action.payload];
			})
			.addCase(addRecord.fulfilled, (state, action) => {
				state.data = [...state.data, action.payload];
			})
			.addCase(updateRecord.fulfilled, (state, action) => {
				const { modifiedKey, ...data } = action.payload;
				state.data = state.data.map((record) => {
					if (record.key !== modifiedKey) {
						return record;
					}
					return { ...record, ...data };
				});
			});
	},
});

export default accountsSlice.reducer;

interface DataType {
	data: RecordTable[];
}
