import React from "react";
import style from "./GernePage.module.css";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../components/static/TableWrapper";
import { useAppSelector } from "../../../app/store";
import { getAllGernesQuery } from "../../../slices/gernes/selectors";
import { ColumnsType } from "antd/es/table";
import { GerneTable } from "../../../types/data";

const GernePage = () => {
	const dataSource = useAppSelector(getAllGernesQuery);

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
				<TableWrapper dataSource={dataSource} columns={columns} />
			</div>
		</LayoutPage>
	);
};

export default GernePage;

const columns: ColumnsType<GerneTable> = [
	{
		title: "tên thể loại",
		dataIndex: "name",
	},
	{
		title: "Mô tả",
		dataIndex: "description",
	},
];
