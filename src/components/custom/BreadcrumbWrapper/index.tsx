import React from "react";
import { useNavigate } from "react-router-dom";
import { BreadcrumbType } from "../../../types/component";
import style from "./BreadcrumbWrapper.module.css";

const BreadcrumbWrapper: React.FC<Props> = ({ items = [] }) => {
	const navigate = useNavigate();
	const len = items.length;

	return (
		<div className={style.container}>
			{items.map((item, index) => (
				<div key={item.path} className={style.itemContainer}>
					<div
						className={style.text}
						onClick={() => {
							if (item.path !== "?") {
								navigate(item.path);
							}
						}}>
						{item.name}
					</div>
					<span className={style.separator} style={{ display: index === len - 1 ? "none" : "" }}>
						{">"}
					</span>
				</div>
			))}
		</div>
	);
};

export default BreadcrumbWrapper;

interface Props {
	items?: BreadcrumbType;
}
