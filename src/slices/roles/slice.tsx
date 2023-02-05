import { createSlice } from "@reduxjs/toolkit";
import { RoleTable } from "../../types/data";
import { getAllRoles } from "./reducers";

const initialState: DataType = {
	data: [],
};

const rolesSlice = createSlice({
	name: "roles",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllRoles.fulfilled, (state, action) => {
			state.data = action.payload;
		});
	},
});

export default rolesSlice.reducer;

interface DataType {
	data: RoleTable[];
}
