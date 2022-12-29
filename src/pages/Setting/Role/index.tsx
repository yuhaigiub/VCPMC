import React, { useState, useMemo } from "react";
import style from "./RolePage.module.css";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../components/static/TableWrapper";
import TabButtons from "../../../components/static/TabButtons";
import { QuickButtonType } from "../../../types/interface";

const RolePage = () => {
	const navigate = useNavigate();
	const [left, setLeft] = useState<boolean>(true);

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

const RoleUserList = () => {
	return <TableWrapper maxRow={6} />;
};

const RoleRoleList = () => {
	return <TableWrapper maxRow={8} />;
};
