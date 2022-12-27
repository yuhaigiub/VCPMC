import React from "react";
import style from "./TwoButtonsWrapper.module.css";

const TwoButtonsWrapper: React.FC<Props> = ({ onPrimaryClick = () => {} }) => {
	return (
		<div className={style.container}>
			<div onClick={() => {}} className={`${style.button} ${style.default}`}>
				Hủy
			</div>
			<div onClick={onPrimaryClick} className={`${style.button} ${style.primary}`}>
				Lưu
			</div>
		</div>
	);
};

export default TwoButtonsWrapper;

interface Props {
	onPrimaryClick?: () => void;
}
