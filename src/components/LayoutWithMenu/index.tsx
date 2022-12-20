import React from "react";
import { Col, Row } from "antd";
import { Outlet } from 'react-router-dom';

import style from "./LayoutWithMenu.module.css";


const LayoutWithMenu: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Row className={style.container}>
				<Col span={2}>
					<div style={{ height: "100%", background: "var(--menu-background)", color: "white" }}>
						Menu
					</div>
				</Col>
				<Col className={style.contentContainer} span={22}>
					<Outlet />
				</Col>
			</Row>
		</>
	);
};

export default LayoutWithMenu;
