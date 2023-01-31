import React, { useState, useMemo } from "react";
import style from "./ContractAuthorizeDetailPage.module.css";

import { useNavigate } from "react-router-dom";

import ContractInfo from "./ContractInfo";
import SongInfo from "./SongInfo";
import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TabButtons from "../../../../../../components/static/TabButtons";

import { QuickButtonType } from "../../../../../../types/component";

const ContractAuthorizeDetailPage = () => {
	const navigate = useNavigate();
	const [left, setLeft] = useState<boolean>(true);
	const quickButtonData = useMemo<QuickButtonType>(() => {
		if (left) {
			return [
				{
					description: "Chỉnh sửa hợp đồng",
					onClick: () => {
						navigate("/manage/contract/authorize/edit");
					},
				},
				{ description: "Gia hạn hợp đồng", onClick: () => {} },
				{ description: "Hủy hợp đồng", onClick: () => {} },
			];
		}
		return [
			{
				description: "Chỉnh sửa tác phẩm",
				onClick: () => {
					navigate("/manage/contract/authorize/edit");
				},
			},
			{ description: "Gia hạn hợp đồng", onClick: () => {} },
			{ description: "Hủy hợp đồng", onClick: () => {} },
			{ description: "Thêm bản ghi", onClick: () => {} },
		];
	}, [left]);

	return (
		<LayoutPage
			heading={`Chi tiết hợp đồng ủy quyền bài hát - ${"ID"}`}
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Quản lý hợp đồng", path: "/manage/contract" },
				{ name: "Chi tiết", path: "/manage/contract/authorize/detail" },
			]}
			quickButtonData={quickButtonData}>
			<div className={style.container}>
				<TabButtons left={left} setLeft={setLeft} />
				{left ? <ContractInfo /> : <SongInfo />}
			</div>
		</LayoutPage>
	);
};

export default ContractAuthorizeDetailPage;
