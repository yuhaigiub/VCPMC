import React from "react";
import style from "./PlaylistPage.module.css";

import { Select, Input } from "antd";

import LayoutPage from "../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../components/static/TableWrapper";

const PlaylistPage = () => {
	return (
		<LayoutPage heading="Playlist">
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
