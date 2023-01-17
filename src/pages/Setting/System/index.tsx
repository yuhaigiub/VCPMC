import React, { useState } from "react";
import style from "./SystemPage.module.css";

import { Radio } from "antd";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";

const SystemPage = () => {
	const [type, setType] = useState<string>("day");

	return (
		<LayoutPage
			heading="Cài đặt hệ thống"
			breadcrumbData={[
				{ name: "Cài đặt", path: "?" },
				{ name: "Cài đặt hệ thống", path: "/setting/system" },
			]}>
			<div className={style.container}>
				<div className={style.subHeading}>Cài đặt chu kỳ đối soát</div>
				<div>
					<Radio
						checked={type === "day"}
						className={style.radio}
						onClick={() => {
							setType("day");
						}}>
						Đối soát theo quý
					</Radio>
					<div className={style.description}>
						<div>Quý 1: 01/06 - 30/07</div>
						<div>Quý 2: 01/08 - 30/09</div>
						<div>Quý 3: 01/10 - 30/11</div>
						<div>Quý 4: 01/12 - 31/12</div>
					</div>
					<Radio
						checked={type === "year"}
						className={style.radio}
						onClick={() => {
							setType("year");
						}}>
						Đối soát theo tháng
					</Radio>
				</div>
			</div>
			<div className={style.buttonContainer}>
				<div className={style.button}>Lưu</div>
			</div>
		</LayoutPage>
	);
};

export default SystemPage;
