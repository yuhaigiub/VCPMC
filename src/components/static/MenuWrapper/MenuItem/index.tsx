import React from "react";
import style from "./MenuItem.module.css";

const MenuItem: React.FC<Props> = ({ icon, title }) => {
	return (
		<span>
			<div className={style.container}>
				{icon ? <div className={style.icon}>{icon}</div> : <></>}
				<div className={style.text}>{title}</div>
			</div>
		</span>
	);
};

export default MenuItem;

interface Props {
	icon?: React.ReactNode;
	title: string;
}
