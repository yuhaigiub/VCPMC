import React from "react";

import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import CompanyPage from "../../../pages/Manage/Company";
import CompanyEditPage from "../../../pages/Manage/Company/Utils/Edit";

const CompanyRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<CompanyPage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}>
				<Route path="edit" element={<CompanyEditPage />} />
			</Route>
		</Routes>
	);
};

export default CompanyRoute;
