import React from "react";
import style from "./QuickButton.module.css";

const QuickButton: React.FC<Props> = ({ description }) => {
	return (
		<div className={style.container}>
			<div className={style.icon}>+</div>
			<div className={style.text}>{description}</div>
		</div>
	);
};

export default QuickButton;
interface Props {
	description: string;
}
