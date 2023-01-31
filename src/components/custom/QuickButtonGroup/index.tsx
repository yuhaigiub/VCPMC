import React from "react";
import style from "./QuickButtonGroup.module.css";

import { QuickButtonType } from "../../../types/component";
import QuickButton from "./QuickButton";

const QuickButtonGroup: React.FC<Props> = ({ items = [] }) => {
	return (
		<div className={style.container}>
			<div className={style.group}>
				{items.map((item) => {
					return <QuickButton key={item.description} item={item} />;
				})}
			</div>
		</div>
	);
};

export default QuickButtonGroup;

interface Props {
	items?: QuickButtonType;
}
