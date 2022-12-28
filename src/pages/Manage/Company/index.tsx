import React from "react";
import style from "./CompanyPage.module.css";

import { Input } from "antd";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../components/static/TableWrapper";

const CompanyPage = () => {
	return (
		<LayoutPage
			heading="Danh sách đối tác ủy quyền"
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Đối tác ủy quyền", path: "/manage/company" },
			]}>
			<div className={style.container}>
				<div className={style.searchContainer}>
					<Input style={{ width: "20rem" }} />
				</div>
				<TableWrapper />
			</div>
		</LayoutPage>
	);
};

export default CompanyPage;
