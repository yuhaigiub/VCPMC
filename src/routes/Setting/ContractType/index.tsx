import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import ContractTypePage from "../../../pages/Setting/ContractType";

const ContractTypeRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<ContractTypePage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}></Route>
		</Routes>
	);
};

export default ContractTypeRoute;
