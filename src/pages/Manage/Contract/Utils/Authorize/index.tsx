import React from "react";
import style from "../../ContractPage.module.css";

import { Input, Select } from "antd";
import TableWrapper from "../../../../../components/static/TableWrapper";

const ContractAuthorizeList = () => {
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

export default ContractAuthorizeList;
