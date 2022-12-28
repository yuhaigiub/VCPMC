import React from "react";
import style from "./DevicePage.module.css";

import { Select, Input } from "antd";
import { useNavigate } from "react-router-dom";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../components/static/TableWrapper";

const DevicePage = () => {
	const navigate = useNavigate();

	return (
		<LayoutPage
			heading="Danh sách thiết bị"
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Danh sách thiết bị", path: "/manage/device" },
			]}
			quickButtonData={[
				{
					description: "Thêm thiết bị",
					onClick: () => {
						navigate("/manage/device/add");
					},
				},
				{ description: "Kích hoạt thiết bị", onClick: () => {} },
				{ description: "Khóa thiết bị", onClick: () => {} },
				{ description: "Xóa thiết bị", onClick: () => {} },
			]}>
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
				<TableWrapper />
			</div>
		</LayoutPage>
	);
};

export default DevicePage;
