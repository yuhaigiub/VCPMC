import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import ThemePage from "../../../pages/Setting/Theme";

const ThemeRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<ThemePage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}></Route>
		</Routes>
	);
};

export default ThemeRoute;
