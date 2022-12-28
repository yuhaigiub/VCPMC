import React from "react";
import style from "./PlaylistPage.module.css";

import { useNavigate } from "react-router-dom";
import { Select, Input } from "antd";

import LayoutPage from "../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../components/static/TableWrapper";

const PlaylistPage = () => {
	const navigate = useNavigate();

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
					<div style={{ color: "white" }}>Hello</div>
				</div>
				<TableWrapper />
			</div>
		</LayoutPage>
	);
};

export default PlaylistPage;
