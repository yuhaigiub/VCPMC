import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import AuthProvider from "./app/AuthContext";

const AntdTheme = {
	token: {
		colorPrimary: "#ff7506",
		colorBgContainer: "rgba(47, 47, 65, 0.7)",
		colorBgElevated: "rgba(47, 47, 65)",
		colorBorder: "rgb(67, 67, 79)",
		colorBorderSecondary: "rgb(67, 67, 79)",
		colorText: "#fff",
		colorTextPlaceholder: "rgb(166, 166, 166, 0.8);",
		colorTextDisabled: "#888",
	},
	components: {
		Select: {
			colorTextDisabled: "#ff7506",
			colorText: "#bbb",
		},
		Input: {},
		DatePicker: {
			colorIcon: "#ff7506",
			colorIconHover: "#fff",
			colorTextDisabled: "#ff7506",
		},
		Checkbox: {
			// colorBgContainer: "#fff",
			colorBorder: "#347aff",
			fontSize: 16,
		},
		Radio: {
			colorBorder: "#ff7506",
			borderRadius: 10,
		},
	},
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<ConfigProvider theme={AntdTheme}>
					<App />
				</ConfigProvider>
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>
);
