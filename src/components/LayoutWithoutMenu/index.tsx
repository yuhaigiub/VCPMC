import React from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import style from "./LayoutWithoutMenu.module.css";

const LayoutWithoutMenu: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<div className={style.container}>
			<div className={style.menuContainer}>
				<div className={style.menu}>Menu</div>
				<div className={style.arrow}>{">"}</div>
			</div>
			<div className={style.contentContainer}>
				<Outlet />
			</div>
		</div>
	);
};

export default LayoutWithoutMenu;
