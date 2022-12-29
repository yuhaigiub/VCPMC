import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import RolePage from "../../../pages/Setting/Role";
import RoleRoleAddPage from "../../../pages/Setting/Role/Utils/Role/Add";
import RoleRoleEditPage from "../../../pages/Setting/Role/Utils/Role/Edit";
import RoleUserAddPage from "../../../pages/Setting/Role/Utils/User/Add";
import RoleUserEditPage from "../../../pages/Setting/Role/Utils/User/Edit";

const RoleRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<RolePage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}>
				<Route path="user">
					<Route path="add" element={<RoleUserAddPage />} />
					<Route path="edit" element={<RoleUserEditPage />} />
				</Route>
				<Route path="role">
					<Route path="add" element={<RoleRoleAddPage />} />
					<Route path="edit" element={<RoleRoleEditPage />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default RoleRoute;
