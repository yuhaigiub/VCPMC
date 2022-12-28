import React, { useState } from "react";
import style from "./ContractPage.module.css";

import { useNavigate } from "react-router-dom";
import { Select, Input } from "antd";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../components/static/TableWrapper";
import TabButtons from "../../../components/static/TabButtons";

const ContractPage = () => {
	const navigate = useNavigate();
	const [left, setLeft] = useState<boolean>(true);

	return (
		<LayoutPage
			heading="Danh sách hợp đồng"
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Quản lý hợp đồng", path: "/manage/contract" },
			]}
			quickButtonData={[
				{
					description: "Thêm hợp đồng",
					onClick: () => {
						if (left) {
							navigate("/manage/contract/authorize/add");
						} else {
							navigate("/manage/contract/exploit/add");
						}
					},
				},
			]}>
			<div className={style.container}>
				<TabButtons left={left} setLeft={setLeft} />
				{left ? <AuthorizedContract /> : <ExploitedContract />}
			</div>
		</LayoutPage>
	);
};

export default ContractPage;

const AuthorizedContract = () => {
	return (
		<>
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

			<TableWrapper maxRow={7} />
		</>
	);
};

const ExploitedContract = () => {
	return (
		<>
			<div className={style.searchContainer}>
				<Input style={{ width: "20rem" }} />
			</div>
			<TableWrapper maxRow={7} />
		</>
	);
};
