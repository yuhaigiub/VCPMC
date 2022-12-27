import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWithMenu from "../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../components/Layouts/NonPage/LayoutWithoutMenu";
import RecordPage from "../../pages/Record";
import RecordEditPage from "../../pages/Record/Utils/Edit";

const RecordRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<RecordPage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}>
				<Route path="edit" element={<RecordEditPage />} />
			</Route>
		</Routes>
	);
};

export default RecordRoute;
