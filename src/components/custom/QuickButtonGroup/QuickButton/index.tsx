import React from "react";
import { QuickButtonItem } from "../../../../types/component";
import style from "./QuickButton.module.css";

const QuickButton: React.FC<Props> = ({ item }) => {
	return (
		<div className={style.container} onClick={item.onClick}>
			<div className={style.icon}>+</div>
			<div className={style.text}>{item.description}</div>
		</div>
	);
};

export default QuickButton;
interface Props {
	item: QuickButtonItem;
}
