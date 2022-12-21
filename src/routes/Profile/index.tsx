import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWithMenu from "../../components/Layouts/LayoutWithMenu";
import ProfilePage from "../../pages/Profile";

const ProfileRoute = () => {
	return (
		<Routes>
			<Route element={<LayoutWithMenu />}>
				<Route index element={<ProfilePage />} />
			</Route>
		</Routes>
	);
};

export default ProfileRoute;
