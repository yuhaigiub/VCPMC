import React from "react";
import style from "./SongInfo.module.css";

import { Select, Input } from "antd";

import TableWrapper from "../../../../../../../components/static/TableWrapper";

const SongInfo = () => {
	return (
		<div className={style.container}>
			<div className={`${style.searchContainer} ${style.flexContainer}`}>
				<div className={style.searchContainerLeft}>
					<div className={style.searchWrapper}>
						<div className={style.text}>Quyền sở hữu: </div>
						<Select style={{ width: "10rem" }} />
					</div>
					<div className={style.searchWrapper}>
						<div className={style.text}>Quyền sở hữu: </div>
						<Select style={{ width: "10rem" }} />
					</div>
				</div>
				<div>
					<Input style={{ width: "20rem" }} />
				</div>
			</div>
			<TableWrapper maxRow={8} />
		</div>
	);
};

export default SongInfo;
