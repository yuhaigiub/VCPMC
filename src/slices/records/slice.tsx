import { createSlice } from "@reduxjs/toolkit";
import { RecordTable } from "../../types/data";
import { getAllRecords } from "./reducers";

const initialState: DataType = {
	data: [],
};

const accountsSlice = createSlice({
	name: "accounts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllRecords.fulfilled, (state, action) => {
			state.data = action.payload;
		});
	},
});

export default accountsSlice.reducer;

interface DataType {
	data: RecordTable[];
}
