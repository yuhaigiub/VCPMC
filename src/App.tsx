import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CompanyRoute from "./routes/Manage/Company";
import ContractRoute from "./routes/Manage/Contract";
import DeviceRoute from "./routes/Manage/Device";
import UserRoute from "./routes/Manage/User";
import PlaylistRoute from "./routes/Playlist";
import ProfileRoute from "./routes/Profile";
import RecordRoute from "./routes/Record";
import ScheduleRoute from "./routes/Schedule";
import RoleRoute from "./routes/Setting/Role";

const App = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="profile/*" element={<ProfileRoute />} />
				<Route path="record/*" element={<RecordRoute />} />
				<Route path="playlist/*" element={<PlaylistRoute />} />
				<Route path="schedule/*" element={<ScheduleRoute />} />
				<Route path="manage/*">
					<Route path="contract/*" element={<ContractRoute />} />
					<Route path="device/*" element={<DeviceRoute />} />
					<Route path="user/*" element={<UserRoute />} />
					<Route path="company/*" element={<CompanyRoute />} />
				</Route>
				<Route path="statistic/*">
					<Route path="report" />
					<Route path="history" />
					<Route path="distribute" />
				</Route>
				<Route path="setting/*">
					<Route path="role/*" element={<RoleRoute />} />
					<Route path="theme" />
					<Route path="contractType" />
					<Route path="gerne" />
					<Route path="system" />
				</Route>
				<Route path="support"></Route>
			</Route>
		</Routes>
	);
};

export default App;
