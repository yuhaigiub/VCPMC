import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWithMenu from "../../../components/Layouts/NonPage/LayoutWithMenu";
import LayoutWithoutMenu from "../../../components/Layouts/NonPage/LayoutWithoutMenu";
import UserPage from "../../../pages/Manage/User";
import UserDetailPage from "../../../pages/Manage/User/Utils/Detail";
import User_IndividualAddPage from "../../../pages/Manage/User/Utils/Individual/Add";
import User_IndividualDetailPage from "../../../pages/Manage/User/Utils/Individual/Detail";
import User_IndividualEditPage from "../../../pages/Manage/User/Utils/Individual/Edit";

const UserRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<UserPage />} />
			</Route>
			<Route element={<LayoutWithoutMenu />}>
				<Route path="detail" element={<UserDetailPage />} />
				<Route path="individual">
					<Route path="add" element={<User_IndividualAddPage />} />
					<Route path="detail" element={<User_IndividualDetailPage />} />
					<Route path="edit" element={<User_IndividualEditPage />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default UserRoute;
