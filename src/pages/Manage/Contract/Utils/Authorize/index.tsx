import React from "react";
import style from "../../ContractPage.module.css";

import { Input, Select } from "antd";
import TableWrapper from "../../../../../components/static/TableWrapper";
import { ContractTable } from "../../../../../types/data";
import { ColumnsType } from "antd/es/table";
import LinkTableCell from "../../../../../components/static/TableCell/LinkTableCell";

const ContractAuthorizeList: React.FC<{ data: ContractTable[] }> = ({ data }) => {
	return (
		<>
			<div className={`${style.searchContainer} ${style.flexContainer}`}>
				<div className={style.searchContainerLeft}>
					<div className={style.searchWrapper}>
						<div className={style.text}>Quyền sở hữu: </div>
						<Select style={{ width: "10rem" }} />
					</div>
				</div>
				<div>
					<Input style={{ width: "20rem" }} />
				</div>
			</div>

			<TableWrapper columns={columns} maxRow={7} dataSource={data} />
		</>
	);
};

export default ContractAuthorizeList;

const columns: ColumnsType<ContractTable> = [
	{ title: "Mã hợp đồng", dataIndex: "key", key: "key" },
	{ title: "Tên hợp đồng", dataIndex: "contractName", key: "contractName" },
	{
		title: "Ngày tạo",
		dataIndex: "dateCreated",
		key: "dateCreated",
		render: (_, record) => <span>{record.dateCreated.toDateString()}</span>,
	},
	{
		title: "Ngày hết hạn",
		dataIndex: "dateExpired",
		key: "dateExpired",
		render: (_, record) => <span>{record.dateExpired.toDateString()}</span>,
	},
	{
		title: "",
		key: "edit",
		render: (_, record) => (
			<LinkTableCell to={`/manage/contract/authorize/edit/${record.key}`}>Cập nhật</LinkTableCell>
		),
	},
];
