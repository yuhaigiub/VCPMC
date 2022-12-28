import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import DevicePage from "../../../pages/Manage/Device";
import DeviceAddPage from "../../../pages/Manage/Device/Utils/Add";
import DeviceDetailPage from "../../../pages/Manage/Device/Utils/Detail";

const DeviceRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<DevicePage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}>
				<Route path="add" element={<DeviceAddPage />} />
				<Route path="detail" element={<DeviceDetailPage />} />
			</Route>
		</Routes>
	);
};

export default DeviceRoute;
