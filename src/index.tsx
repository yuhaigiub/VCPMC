import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { AntdTheme } from "./constants/theme-setup";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./app/AuthContext";
import store from "./app/store";
import { Provider } from "react-redux";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<AuthProvider>
				<BrowserRouter>
					<ConfigProvider theme={AntdTheme}>
						<App />
					</ConfigProvider>
				</BrowserRouter>
			</AuthProvider>
		</Provider>
	</React.StrictMode>
);
