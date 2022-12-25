import React from "react";
import style from "./LayoutWithMenu.module.css";

import { Outlet } from "react-router-dom";

import MenuWrapper from "../../../static/MenuWrapper";

const LayoutWithMenu: React.FC = () => {
	return (
		<>
			<div className={style.container}>
				<div className={style.menuContainer}>
					<MenuWrapper />
				</div>
				<div className={style.contentContainer}>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default LayoutWithMenu;
