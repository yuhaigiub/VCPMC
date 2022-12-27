import React from "react";
import style from "./TwoButtonsWrapper.module.css";

const TwoButtonsWrapper: React.FC<Props> = ({
	onPrimaryClick = () => {},
	primaryType = "submit",
}) => {
	return (
		<div className={style.container}>
			<div onClick={() => {}} className={`${style.button} ${style.default}`}>
				Hủy
			</div>
			<button
				type={primaryType}
				onClick={onPrimaryClick}
				className={`${style.button} ${style.primary}`}>
				Lưu
			</button>
		</div>
	);
};

export default TwoButtonsWrapper;

interface Props {
	primaryType?: "submit" | "button" | "reset" | undefined;
	onPrimaryClick?: () => void;
}
