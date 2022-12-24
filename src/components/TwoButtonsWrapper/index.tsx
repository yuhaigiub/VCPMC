import React from "react";
import style from "./TwoButtonsWrapper.module.css";

const TwoButtonsWrapper = () => {
	return (
		<div className={style.container}>
			<div className={`${style.button} ${style.default}`}>Hủy</div>
			<div className={`${style.button} ${style.primary}`}>Lưu</div>
		</div>
	);
};

export default TwoButtonsWrapper;
