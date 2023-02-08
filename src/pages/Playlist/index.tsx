import React, { useEffect } from "react";
import style from "./PlaylistPage.module.css";

import { useNavigate } from "react-router-dom";
import { Input } from "antd";

import LayoutPage from "../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../components/static/TableWrapper";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { getAllPlaylistsQuery } from "../../slices/playlists/selectors";
import { getAllPlaylists } from "../../slices/playlists/reducers";
import { ColumnsType } from "antd/es/table";
import { PlaylistTable } from "../../types/data";

const PlaylistPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const data = useAppSelector(getAllPlaylistsQuery);

	useEffect(() => {
		dispatch(getAllPlaylists());
	}, []);

	return (
		<LayoutPage
			heading="Playlist"
			quickButtonData={[
				{
					description: "Thêm Playlist",
					onClick: () => {
						navigate("/playlist/add");
					},
				},
			]}>
			<div className={style.container}>
				<div className={`${style.searchContainer} ${style.flexContainer}`}>
					<div className={style.searchContainerLeft}>
						<Input style={{ width: "20rem" }} />
					</div>
				</div>
				<TableWrapper dataSource={data} columns={columns} />
			</div>
		</LayoutPage>
	);
};

export default PlaylistPage;

const columns: ColumnsType<PlaylistTable> = [
	{ title: "Tên playlist", dataIndex: "name", key: "name" },
	{
		title: "Số bản ghi",
		key: "numberOfRecords",
		render: (_, record) => {
			return <span>{record.records.length}</span>;
		},
	},
	{
		title: "Mô tả",
		dataIndex: "description",
		key: "description",
	},
	{
		title: "Ngày tạo",
		key: "dateCreated",
		render: (_, record) => {
			return <span>{record.dateCreated.toDateString()}</span>;
		},
	},
];
