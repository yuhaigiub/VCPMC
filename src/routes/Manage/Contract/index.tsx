import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import ContractPage from "../../../pages/Manage/Contract";
import ContractDetailPage from "../../../pages/Manage/Contract/Detail";

const ContractRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<ContractPage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}>
				<Route path="detail" element={<ContractDetailPage />} />
			</Route>
		</Routes>
	);
};

export default ContractRoute;
