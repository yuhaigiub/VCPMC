import React from "react";
import style from "./TabButtons.module.css";

const TabButtons: React.FC<Props> = ({ left, setLeft }) => {
	return (
		<div className={style.tabContainer}>
			<div
				onClick={() => {
					setLeft(true);
				}}
				className={`${style.tab} ${left ? style.tabActive : ""}`}>
				Hợp đồng ủy quyền
			</div>
			<div
				onClick={() => {
					setLeft(false);
				}}
				className={`${style.tab} ${!left ? style.tabActive : ""}`}>
				Hợp đồng khai thác
			</div>
		</div>
	);
};

export default TabButtons;

interface Props {
	left: boolean;
	setLeft: React.Dispatch<React.SetStateAction<boolean>>;
}
