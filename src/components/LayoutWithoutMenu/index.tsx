import React from "react";
import { Row, Col } from "antd";

import style from "./LayoutWithoutMenu.module.css";

const LayoutWithoutMenu: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<div className={style.container}>
			<div className={style.menuContainer}>
				<div className={style.menu}>Menu</div>
				<div className={style.arrow}>{">"}</div>
			</div>
			<div className={style.contentContainer}>{children}</div>
		</div>
	);
};

export default LayoutWithoutMenu;
