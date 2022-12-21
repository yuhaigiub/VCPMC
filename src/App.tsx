import React from "react";

import { Routes, Route } from "react-router-dom";
import LayoutWithMenu from "./components/Layouts/LayoutWithMenu";
import LayoutWithoutMenu from "./components/Layouts/LayoutWithoutMenu";
import TableWrapper from "./components/TableWrapper";
import Home from "./pages/Home";
import Records from "./pages/Record";
import PlaylistRoute from "./routes/Playlist";
import ProfileRoute from "./routes/Profile";
import RecordRoute from "./routes/Record";

const App = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="profile/*" element={<ProfileRoute />} />
				<Route path="record/*" element={<RecordRoute />} />
				<Route path="playlist/*" element={<PlaylistRoute />} />
				<Route path="schedule/*"></Route>
				<Route path="manage/*">
					<Route path="contract" />
					<Route path="device" />
					<Route path="user" />
					<Route path="company" />
				</Route>
				<Route path="statistic/*">
					<Route path="report" />
					<Route path="history" />
					<Route path="distribute" />
				</Route>
				<Route path="setting/*"></Route>
				<Route path="support"></Route>
			</Route>
		</Routes>
	);
};

export default App;
