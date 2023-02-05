import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./TwoButtonsWrapper.module.css";

const TwoButtonsWrapper: React.FC<Props> = ({
	onPrimaryClick = () => {},
	primaryType = "submit",
}) => {
	const navigate = useNavigate();

	return (
		<div className={style.container}>
			<div
				onClick={() => {
					navigate(-1);
				}}
				className={`${style.button} ${style.default}`}>
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
