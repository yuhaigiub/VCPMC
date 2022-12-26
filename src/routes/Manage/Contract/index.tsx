import React from "react";

import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import ContractPage from "../../../pages/Manage/Contract";
import ContractAuthorizeAddPage from "../../../pages/Manage/Contract/Utils/Authorize/Add";
import ContractAuthorizeDetailPage from "../../../pages/Manage/Contract/Utils/Authorize/Detail";
import ContractAuthorizeEditPage from "../../../pages/Manage/Contract/Utils/Authorize/Edit";

const ContractRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<ContractPage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}>
				<Route path="authorize">
					<Route path="detail" element={<ContractAuthorizeDetailPage />} />
					<Route path="edit" element={<ContractAuthorizeEditPage />} />
					<Route path="add" element={<ContractAuthorizeAddPage />} />
				</Route>
				<Route path="exploit"></Route>
			</Route>
		</Routes>
	);
};

export default ContractRoute;
