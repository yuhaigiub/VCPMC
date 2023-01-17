import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import SystemPage from "../../../pages/Setting/System";

const SystemRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<SystemPage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}></Route>
		</Routes>
	);
};

export default SystemRoute;
