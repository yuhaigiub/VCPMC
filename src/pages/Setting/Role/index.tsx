import React, { useState, useMemo, useEffect } from "react";
import style from "./RolePage.module.css";

import { useNavigate } from "react-router-dom";
import { Input } from "antd";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TabButtons from "../../../components/static/TabButtons";
import { QuickButtonType } from "../../../types/component";
import RoleUserList from "./Utils/User";
import RoleRoleList from "./Utils/Role";
import { useAppDispatch } from "../../../app/store";
import { getAllRoles } from "../../../slices/roles/reducers";

const RolePage = () => {
	const navigate = useNavigate();
	const [left, setLeft] = useState<boolean>(true);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllRoles()).then((res) => console.log("fetched roles"));
	}, []);

	const quickButtonData = useMemo<QuickButtonType>(() => {
		if (left) {
			return [
				{
					description: "Thêm người dùng",
					onClick: () => {
						navigate("/setting/role/user/add");
					},
				},
			];
		}
		return [
			{
				description: "Thêm vai trò",
				onClick: () => {
					navigate("setting/role/role/add");
				},
			},
		];
	}, [left]);

	return (
		<LayoutPage
			heading="Danh sách người dùng"
			breadcrumbData={[
				{ name: "Cài đặt", path: "?" },
				{ name: "Phân quyền người dùng", path: "/setting/role" },
			]}
			quickButtonData={quickButtonData}>
			<div className={style.container}>
				<div className={style.searchContainer}>
					<TabButtons left={left} setLeft={setLeft} />
					<Input style={{ width: "20em" }} />
				</div>
				{left ? <RoleUserList /> : <RoleRoleList />}
			</div>
		</LayoutPage>
	);
};

export default RolePage;
