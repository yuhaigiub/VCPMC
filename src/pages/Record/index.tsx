import React, { useEffect } from "react";

import LayoutPage from "../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../components/static/TableWrapper";

import { ColumnsType } from "antd/es/table";
import { RecordTable } from "../../types/data";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { getAllRecords } from "../../slices/records/reducers";
import { getAllRecordsQuery } from "../../slices/records/selectors";

const RecordPage = () => {
	const dispatch = useAppDispatch();
	const dataSource = useAppSelector(getAllRecordsQuery);

	useEffect(() => {
		dispatch(getAllRecords()).then((res) => {
			console.log("done fetching data");
		});
	}, []);

	return (
		<LayoutPage
			heading="Kho bản ghi"
			quickButtonData={[{ description: "Quản lý phê duyệt", onClick: () => {} }]}>
			<div>
				<TableWrapper columns={columns} dataSource={dataSource} />
			</div>
		</LayoutPage>
	);
};

export default RecordPage;

const columns: ColumnsType<RecordTable> = [
	{
		title: "Mã hợp đồng",
		dataIndex: "contractId",
		key: "contractId",
	},
	{
		title: "Thể loại",
		dataIndex: "gernes",
		key: "gernes",
		render: (_, record) => <span>Thể loại</span>,
	},
	{
		title: "Tên bản ghi",
		dataIndex: "recordName",
		key: "recordName",
	},
	{
		title: "Ca sĩ",
		dataIndex: "singerName",
		key: "singerName",
	},
	{
		title: "Thời lượng",
		dataIndex: "time",
		key: "time",
	},
];
