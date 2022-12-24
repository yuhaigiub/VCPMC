import React from "react";
import style from "./ContractPage.module.css";

import { Select, Input } from "antd";

import LayoutPage from "../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../components/TableWrapper";

const ContractPage = () => {
	return (
		<LayoutPage>
			<div className={style.container}>
				<div className={style.tabContainer}>
					<div className={`${style.tab} ${style.tabActive}`}>Hợp đồng ủy quyền</div>
					<div className={`${style.tab}`}>Hợp đồng khai thác</div>
				</div>
				<div className={style.searchContainer}>
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
			</div>
		</LayoutPage>
	);
};

export default ContractPage;
