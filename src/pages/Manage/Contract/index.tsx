import React, { useEffect } from "react";
import style from "./ContractPage.module.css";

import { useNavigate } from "react-router-dom";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import ContractAuthorizeList from "./Utils/Authorize";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { getAllContractsQuery } from "../../../slices/contracts/selectors";
import { getAllContracts } from "../../../slices/contracts/reducers";

const ContractPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const data = useAppSelector(getAllContractsQuery);

	useEffect(() => {
		dispatch(getAllContracts()).then((res) => console.log("fetch contracts"));
	}, []);

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
						navigate("/manage/contract/authorize/add");
					},
				},
			]}>
			<div className={style.container}>
				<ContractAuthorizeList data={data} />
			</div>
		</LayoutPage>
	);
};

export default ContractPage;
