import React from "react";

import { Outlet } from "react-router-dom";

import style from "./LayoutWithMenu.module.css";
import MenuWrapper from "../../../MenuWrapper";

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
