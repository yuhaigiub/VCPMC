import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../components/Layouts/NonPage/LayoutWithMenu";
import ContractPage from "../../pages/Contract";

const ContractRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<ContractPage />} />
			</Route>
		</Routes>
	);
};

export default ContractRoute;
