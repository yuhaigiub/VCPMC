import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import GernePage from "../../../pages/Setting/Gerne";

const GerneRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<GernePage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}></Route>
		</Routes>
	);
};

export default GerneRoute;
