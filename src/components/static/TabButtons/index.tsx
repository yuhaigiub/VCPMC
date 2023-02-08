import React from "react";
import style from "./TabButtons.module.css";

const TabButtons: React.FC<Props> = ({ left, setLeft, leftLabel = "", rightLabel = "" }) => {
	return (
		<div className={style.tabContainer}>
			<div
				onClick={() => {
					setLeft(true);
				}}
				className={`${style.tab} ${left ? style.tabActive : ""}`}>
				{leftLabel}
			</div>
			<div
				onClick={() => {
					setLeft(false);
				}}
				className={`${style.tab} ${!left ? style.tabActive : ""}`}>
				{rightLabel}
			</div>
		</div>
	);
};

export default TabButtons;

interface Props {
	left: boolean;
	setLeft: React.Dispatch<React.SetStateAction<boolean>>;
	leftLabel?: string;
	rightLabel?: string;
}
