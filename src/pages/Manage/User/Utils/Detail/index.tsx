import React from "react";

import style from "./UserDetailPage.module.css";

import { Input } from "antd";

import LayoutPage from "../../../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../../../components/static/TableWrapper";

const UserDetailPage = () => {
	return (
		<LayoutPage
			heading={`Đơn vị sử dụng - ${"Name"}`}
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Đơn vị sử dụng", path: "/manage/user" },
				{ name: "Chi tiết", path: "/manage/user/detail" },
			]}>
			<div className={style.container}>
				<div className={style.searchContainer}>
					<Input style={{ width: "20em" }} />
				</div>
				<TableWrapper />
			</div>
		</LayoutPage>
	);
};

export default UserDetailPage;
