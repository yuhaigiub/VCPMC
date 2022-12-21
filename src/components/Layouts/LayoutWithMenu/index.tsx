import React from "react";

import { Outlet } from "react-router-dom";

import style from "./LayoutWithMenu.module.css";
import MenuWrapper from "../../MenuWrapper";
import FloatButtonWrapper from "../../QuickButtonGroup/QuickButton";

const LayoutWithMenu: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
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
