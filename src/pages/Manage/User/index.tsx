import React from "react";
import style from "./UserPage.module.css";

import { Input } from "antd";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../components/static/TableWrapper";

const UserPage = () => {
	return (
		<LayoutPage
			heading="Danh sách đơn vị sử dụng"
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Đơn vị sử dụng", path: "/manage/user" },
			]}
			quickButtonData={[{ description: "Xóa", onClick: () => {} }]}>
			<div className={style.container}>
				<div className={style.searchContainer}>
					<Input style={{ width: "20em" }} />
				</div>
				<TableWrapper />
			</div>
		</LayoutPage>
	);
};

export default UserPage;
