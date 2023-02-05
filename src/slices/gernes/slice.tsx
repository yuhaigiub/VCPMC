import { createSlice } from "@reduxjs/toolkit";
import { GerneTable } from "../../types/data";
import { addGerne, getAllGernes } from "./reducers";

const initialState: DataType = {
	data: [],
};

const gernesSlice = createSlice({
	name: "gernes",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllGernes.fulfilled, (state, action) => {
				state.data = [...action.payload];
			})
			.addCase(addGerne.fulfilled, (state, action) => {
				state.data = [...state.data, action.payload];
			});
	},
});

export default gernesSlice.reducer;

interface DataType {
	data: GerneTable[];
}
