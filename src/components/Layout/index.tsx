import React from "react";
import { Col, Row } from "antd";

import TableWrapper from "../TableWrapper";

const Layout = () => {
	return (
		<>
			<Row style={{ height: "100vh", backgroundColor: "var(--background-black)" }}>
				<Col span={2}>
					<div style={{ height: "100%", background: "var(--menu-background)", color: "white" }}>
						Menu
					</div>
				</Col>
				<Col
					span={22}
					style={{
						height: "100%",
						padding: "3em 5em 6em 5em",
						overflow: "auto",
					}}>
					<h1 style={{ margin: 0, color: "white" }}>Hello World</h1>
					<TableWrapper />
				</Col>
			</Row>
		</>
	);
};

export default Layout;
