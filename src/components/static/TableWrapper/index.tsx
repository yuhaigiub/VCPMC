import React from "react";

import { Table } from "antd";

import type { ColumnsType } from "antd/es/table";

const TableWrapper: React.FC<Props> = ({ maxRow = 9, columns = [], dataSource = [] }) => {
	return (
		<Table
			columns={columns}
			dataSource={dataSource}
			pagination={{
				pageSize: maxRow,
			}}
		/>
	);
};

export default TableWrapper;

interface Props {
	maxRow?: number;
	dataSource?: any[];
	columns?: ColumnsType<any>;
}
