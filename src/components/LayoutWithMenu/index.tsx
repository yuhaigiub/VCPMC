import React from "react";
import { Col, Row } from "antd";

import TableWrapper from "../TableWrapper";
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
					<h1 style={{ margin: 0, color: "white" }}>Hello World</h1>
					<TableWrapper />
				</Col>
			</Row>
		</>
	);
};

export default LayoutWithMenu;
