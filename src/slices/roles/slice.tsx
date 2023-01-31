import { createSlice } from "@reduxjs/toolkit";
import { RoleTable } from "../../types/data";

const initialState: DataType = {
	data: [],
};

const rolesSlice = createSlice({
	name: "roles",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default rolesSlice.reducer;

interface DataType {
	data: RoleTable[];
}
