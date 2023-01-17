import React from "react";
import style from "./ContractType.module.css";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";

const ContractTypePage = () => {
	return (
		<LayoutPage
			heading="Loại hợp đồng"
			breadcrumbData={[
				{ name: "Trang chủ", path: "?" },
				{ name: "Quản lý loại hợp đồng", path: "/setting/contract-type" },
			]}
			quickButtonData={[
				{
					description: "Chỉnh sửa loại hợp đồng",
					onClick: () => {},
				},
				{
					description: "Chỉnh sửa cảnh báo hết hạn",
					onClick: () => {},
				},
			]}>
			<div className={style.container}>
				<div className={style.leftContainer}></div>
				<div className={style.rightContainer}>
					<div className={style.subHeading}>Cảnh báo hết hạn khai thác tác phẩm</div>
					<div className={style.subContainer}>
						<div className={style.label}>Hợp đồng được cảnh báo trước thời gian hết hạn:</div>
						<div className={style.value}>365 ngày</div>
					</div>
				</div>
			</div>
		</LayoutPage>
	);
};

export default ContractTypePage;
