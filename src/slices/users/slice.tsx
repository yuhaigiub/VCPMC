import { createSlice } from "@reduxjs/toolkit";
import { UserTable } from "../../types/data";
import { addUser, getAllUsers, overrideUser, updateUser } from "./reducers";

const initialState: DataType = {
	data: [],
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.data = [...action.payload];
			})
			.addCase(addUser.fulfilled, (state, action) => {
				state.data = [...state.data, action.payload];
			})
			.addCase(overrideUser.fulfilled, (state, action) => {
				state.data = state.data.map((user) => {
					if (user.key !== action.payload.key) {
						return user;
					}
					return action.payload;
				});
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				const { modifiedKey, ...data } = action.payload;
				state.data = state.data.map((user) => {
					if (user.key !== modifiedKey) {
						return user;
					}
					return { ...user, ...data };
				});
			});
	},
});

export default usersSlice.reducer;

interface DataType {
	data: UserTable[];
}
