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
import ContractTypeRoute from "./routes/Setting/ContractType";
import GerneRoute from "./routes/Setting/Gerne";
import RoleRoute from "./routes/Setting/Role";
import SystemRoute from "./routes/Setting/System";
import ThemeRoute from "./routes/Setting/Theme";

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
					<Route path="theme/*" element={<ThemeRoute />} />
					<Route path="contract-type/*" element={<ContractTypeRoute />} />
					<Route path="gerne/*" element={<GerneRoute />} />
					<Route path="system/*" element={<SystemRoute />} />
				</Route>
				<Route path="support"></Route>
			</Route>
		</Routes>
	);
};

export default App;
