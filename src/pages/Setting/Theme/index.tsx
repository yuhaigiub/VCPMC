import React from "react";
import style from "./ThemePage.module.css";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";

const ThemePage = () => {
	return (
		<LayoutPage
			heading="Cài đặt cấu hình"
			breadcrumbData={[
				{ name: "Cài đặt", path: "?" },
				{ name: "Cài đặt hệ thống", path: "/setting/theme" },
			]}>
			<div className={style.container}></div>
		</LayoutPage>
	);
};

export default ThemePage;
