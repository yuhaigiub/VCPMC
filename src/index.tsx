import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "#FF7506",
						colorBgContainer: "rgba(47, 47, 65, 0.7)",
						colorBorder: "rgb(67, 67, 79)",
						colorText: "#fff",
						colorTextDescription: "#fff",
					},
					components: {
						Select: {
							colorText: "#000",
						},
						Input: {},
						DatePicker: {},
					},
				}}>
				<App />
			</ConfigProvider>
		</BrowserRouter>
	</React.StrictMode>
);
