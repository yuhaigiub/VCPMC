import React, { useState } from "react";
import style from "./ContractPage.module.css";

import { useNavigate } from "react-router-dom";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TabButtons from "../../../components/static/TabButtons";
import ContractAuthorizeList from "./Utils/Authorize";
import ContractExploitList from "./Utils/Exploit";

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
				{left ? <ContractAuthorizeList /> : <ContractExploitList />}
			</div>
		</LayoutPage>
	);
};

export default ContractPage;
