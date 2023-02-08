import { createSlice } from "@reduxjs/toolkit";
import { PlaylistTable } from "../../types/data";
import { getAllPlaylists } from "./reducers";

const initialState: DataType = {
	data: [],
};

const playlistsSlice = createSlice({
	name: "playlists",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllPlaylists.fulfilled, (state, action) => {
			state.data = [...action.payload];
		});
	},
});

export default playlistsSlice.reducer;

interface DataType {
	data: PlaylistTable[];
}
