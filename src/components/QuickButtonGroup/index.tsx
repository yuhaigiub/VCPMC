import React from "react";
import QuickButton from "./QuickButton";

import style from "./QuickButtonGroup.module.css";

const QuickButtonGroup = () => {
	return (
		<div className={style.container}>
			{items.map((item) => {
				return <QuickButton description={item.description} />;
			})}
		</div>
	);
};

export default QuickButtonGroup;

const items = [{ description: "Thêm hợp đồng" }, { description: "Chỉnh sửa" }];
