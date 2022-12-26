import React, { useState } from "react";
import style from "./ContractAuthorizeDetailPage.module.css";

import ContractInfo from "./ContractInfo";
import SongInfo from "./SongInfo";
import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TabButtons from "../../../../../../components/static/TabButtons";

const ContractAuthorizeDetailPage = () => {
	const [left, setLeft] = useState<boolean>(true);

	return (
		<LayoutPage>
			<div className={style.container}>
				<TabButtons left={left} setLeft={setLeft} />
				{left ? <ContractInfo /> : <SongInfo />}
			</div>
		</LayoutPage>
	);
};

export default ContractAuthorizeDetailPage;
