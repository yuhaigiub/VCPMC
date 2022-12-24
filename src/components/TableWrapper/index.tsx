import React from "react";

import { Table, ConfigProvider } from "antd";

import type { ColumnsType } from "antd/es/table";
import style from "./TableWrapper.module.css";

const TableWrapper: React.FC<Props> = ({ maxRow = 9 }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					// colorPrimary: "#fff",
				},
				components: {
					Table: {
						colorText: "#fff",
						colorTextHeading: "#ffac69",
						colorBgContainer: "rgba(47, 47, 65, 0.7)",
						colorSplit: "#53535371",
						fontSize: 14,
						lineHeight: 0.8,
					},
					Pagination: {
						colorPrimary: "#f5f5ff",
						colorPrimaryBorder: "#000",
						colorText: "#f5f5ff",
						colorTextDisabled: "#f5f5ff",
						colorBgContainer: "#ff7506",
						colorPrimaryHover: "#fefefe",
						colorBgTextHover: "#686868",
						borderRadius: 20,
					},
				},
			}}>
			<Table
				columns={columns}
				dataSource={dataSource}
				scroll={{ x: 5 }}
				pagination={{
					pageSize: maxRow,
				}}
			/>
		</ConfigProvider>
	);
};

export default TableWrapper;

interface Props {
	maxRow?: number;
}

interface DataType {
	key: string;
	name: string;
	dateCreated: string;
	dateStart: string;
	dateEnd: string;
	status: string;
}

const columns: ColumnsType<DataType> = [
	{
		key: "key",
		title: "Từ khóa",
		dataIndex: "key",
	},
	{
		key: "name",
		title: "Tên khách hàng",
		dataIndex: "name",
	},
	{
		key: "dateCreated",
		title: "Ngày tạo",
		dataIndex: "dateCreated",
	},
	{
		key: "dateStart",
		title: "Ngày bắt đầu",
		dataIndex: "dateStart",
	},
	{
		key: "dateEnd",
		title: "Ngày kết thúc",
		dataIndex: "dateEnd",
	},
	{
		key: "status",
		title: "Trạng thái",
		dataIndex: "status",
	},
];

const dataSource: DataType[] = [
	{
		key: "1",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "2",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "3",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "4",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "5",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "6",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "7",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "8",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "9",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "10",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "11",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "12",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "13",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "14",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "15",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "16",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "17",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "18",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
	{
		key: "19",
		name: "Mike",
		dateCreated: "11/07/2002",
		dateStart: "02/12/2022",
		dateEnd: "02/12/2023",
		status: "New",
	},
];
