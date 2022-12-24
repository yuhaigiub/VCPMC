import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWithMenu from "../../components/Layouts/NonPage/LayoutWithMenu";
import RecordPage from "../../pages/Record";

const RecordRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<RecordPage />} />
			</Route>
		</Routes>
	);
};

export default RecordRoute;
