import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../components/Layouts/NonPage/LayoutWithoutMenu";
import SchedulePage from "../../pages/Schedule";

const ScheduleRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<SchedulePage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}></Route>
		</Routes>
	);
};

export default ScheduleRoute;
