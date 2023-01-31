import React from "react";

import { Table, ConfigProvider } from "antd";

import type { ColumnsType } from "antd/es/table";

const TableWrapper: React.FC<Props> = ({ maxRow = 9, columns = [], dataSource = [] }) => {
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
	dataSource?: any[];
	columns?: ColumnsType<any>;
}
