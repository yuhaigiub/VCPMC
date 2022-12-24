import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../components/Layouts/LayoutWithMenu";
import LayoutWithoutMenu from "../../components/Layouts/LayoutWithoutMenu";
import PlaylistPage from "../../pages/Playlist";
import AddPlaylistPage from "../../pages/Playlist/AddPlaylist";

const PlaylistRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<PlaylistPage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}>
				<Route path="/add" element={<AddPlaylistPage />} />
			</Route>
		</Routes>
	);
};

export default PlaylistRoute;
