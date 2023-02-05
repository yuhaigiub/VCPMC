import React from "react";
import LayoutPage from "../../../../components/Layouts/Page/LayoutPage";
import style from "./RecordAddPage.module.css";
import { Input } from "antd";

const RecordAddPage = () => {
	return (
		<LayoutPage
			heading="Thêm bản ghi"
			breadcrumbData={[
				{ name: "Bản ghi", path: "/record" },
				{ name: "Thêm bản ghi", path: "/record/add" },
			]}>
			<div className={style.container}>TODO</div>
		</LayoutPage>
	);
};

export default RecordAddPage;
