import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "#FF7506",
					},
					components: {
						Select: {
							colorBgContainer: "rgba(47, 47, 65, 0.7)",
							colorBorder: "rgb(67, 67, 79)",
						},
						Input: {
							colorBgContainer: "rgba(47, 47, 65, 0.7)",
							colorBorder: "rgb(67, 67, 79)",
						},
					},
				}}>
				<App />
			</ConfigProvider>
		</BrowserRouter>
	</React.StrictMode>
);
