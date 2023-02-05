import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./LinkTableCell.module.css";

const LinkTableCell: React.FC<Props> = ({ children, to }) => {
	const navigate = useNavigate();
	return (
		<div
			className={style.text}
			onClick={() => {
				navigate(to);
			}}>
			{children}
		</div>
	);
};

export default LinkTableCell;
interface Props {
	children: React.ReactNode;
	to: string;
}
