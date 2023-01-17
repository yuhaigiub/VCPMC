import React from "react";
import style from "./GernePage.module.css";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../components/static/TableWrapper";

const GernePage = () => {
	return (
		<LayoutPage
			heading="Thông tin tác phẩm"
			breadcrumbData={[
				{ name: "Trang chủ", path: "?" },
				{ name: "Cài đặt hệ thống", path: "/setting/gerne" },
			]}
			quickButtonData={[
				{
					description: "Chỉnh sửa",
					onClick: () => {},
				},
			]}>
			<div className={style.container}>
				<div className={style.subHeading}>Thể loại tác phẩm</div>
				<TableWrapper />
			</div>
		</LayoutPage>
	);
};

export default GernePage;
