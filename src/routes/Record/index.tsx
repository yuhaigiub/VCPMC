import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWithMenu from "../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../components/Layouts/NonPage/LayoutWithoutMenu";
import RecordPage from "../../pages/Record";
import RecordAddPage from "../../pages/Record/Utils/Add";
import RecordEditPage from "../../pages/Record/Utils/Edit";

const RecordRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<RecordPage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}>
				<Route path="edit/:key" element={<RecordEditPage />} />
				<Route path="add" element={<RecordAddPage />} />
			</Route>
		</Routes>
	);
};

export default RecordRoute;
