import React, { useState } from "react";
import style from "./ContractDetailPage.module.css";

import LayoutPage from "../../../../components/Layouts/Page/LayoutPage";
import ContractInfo from "./ContractInfo";
import SongInfo from "./SongInfo";
import TabButtons from "../../../../components/TabButtons";

const ContractDetailPage = () => {
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

export default ContractDetailPage;
