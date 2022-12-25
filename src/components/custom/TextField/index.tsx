import React from "react";
import style from "./TextField.module.css";

const TextField: React.FC<Props> = ({ title, value = "test", boldTitle = true }) => {
	return (
		<div className={style.field}>
			<div
				className={style.title}
				style={
					boldTitle
						? {}
						: {
								fontWeight: 500,
								color: "rgb(166, 166, 166, 0.8)",
						  }
				}>
				{title}:
			</div>
			<div className={style.value}>{value}</div>
		</div>
	);
};

export default TextField;

interface Props {
	title: string;
	value?: string | number | React.ReactNode;
	boldTitle?: boolean;
}
