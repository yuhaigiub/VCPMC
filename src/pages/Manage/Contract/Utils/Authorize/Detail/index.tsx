import React, { useState } from "react";
import style from "./ContractAuthorizeDetailPage.module.css";

import ContractInfo from "./ContractInfo";
import SongInfo from "./SongInfo";
import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TabButtons from "../../../../../../components/static/TabButtons";

const ContractAuthorizeDetailPage = () => {
	const [left, setLeft] = useState<boolean>(true);

	return (
		<LayoutPage
			heading={`Chi tiết hợp đồng ủy quyền bài hát - ${"ID"}`}
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Quản lý hợp đồng", path: "/manage/contract" },
				{ name: "Chi tiết", path: "/manage/contract/authorize/detail" },
			]}>
			<div className={style.container}>
				<TabButtons left={left} setLeft={setLeft} />
				{left ? <ContractInfo /> : <SongInfo />}
			</div>
		</LayoutPage>
	);
};

export default ContractAuthorizeDetailPage;
