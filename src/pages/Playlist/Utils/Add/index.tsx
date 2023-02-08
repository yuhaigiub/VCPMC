import React, { useEffect, useState } from "react";
import style from "./AddPlaylistPage.module.css";

import { Checkbox, Form, Input } from "antd";
import LayoutPage from "../../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../../components/static/TableWrapper";
import TwoButtonsWrapper from "../../../../components/static/TwoButtonsWrapper";
import { RecordTable } from "../../../../types/data";
import { useAppDispatch } from "../../../../app/store";
import { getAllRecords } from "../../../../slices/records/reducers";
import { ColumnsType } from "antd/es/table";
import { addPlaylist } from "../../../../slices/playlists/reducers";
import { useNavigate } from "react-router-dom";

const AddPlaylistPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [records, setRecords] = useState<RecordTable[]>([]);
	const [selections, setSelections] = useState<string[]>([]);

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
		{
			title: "",
			key: "select",
			render: (_, record) => {
				return (
					<Checkbox
						onChange={(e) => {
							if (e.target.checked) {
								setSelections((s) => [...s, record.key]);
							} else {
								setSelections((s) => s.filter((id) => id !== record.key));
							}
						}}
					/>
				);
			},
		},
	];

	useEffect(() => {
		dispatch(getAllRecords())
			.unwrap()
			.then((res) => {
				setRecords(res);
			});
	}, []);

	return (
		<LayoutPage
			heading="Thêm Playlist"
			breadcrumbData={[
				{ name: "Playlist", path: "?" },
				{ name: "Thêm Playlist mới", path: "/playlist/add" },
			]}>
			<Form
				className={style.container}
				onFinish={(values) => {
					const data = {
						key: "",
						...values,
						records: selections,
						dateCreated: new Date(),
					};
					dispatch(addPlaylist(data)).then((res) => {
						navigate(-1);
					});
				}}>
				<div className={style.containerLeft}>
					<div>
						<div className={`${style.title} ${style.titleTop}`}>Ảnh bìa:</div>
						<div
							style={{
								width: "100px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								color: "#ff7506",
								aspectRatio: "3/1",
								border: "2px solid #ff7506",
								borderRadius: "8px",
							}}>
							Tải ảnh lên
						</div>
						<div className={style.dividers} />
					</div>
					<div>
						<div className={`${style.title} ${style.titleTop}`}>Tiêu đề:</div>
						<Form.Item name="name">
							<Input />
						</Form.Item>
						<div className={style.dividers} />
					</div>
					<div>
						<div className={`${style.title} ${style.titleTop}`}>Mô tả:</div>
						<Form.Item name="description">
							<Input.TextArea autoSize={{ minRows: 8, maxRows: 8 }} />
						</Form.Item>
						<div className={style.dividers} />
					</div>
				</div>
				<div className={style.containerRight}>
					<TableWrapper dataSource={records} columns={columns} />
					<TwoButtonsWrapper />
				</div>
			</Form>
		</LayoutPage>
	);
};

export default AddPlaylistPage;
