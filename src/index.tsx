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
import { getAllRoles } from "./slices/roles/reducers";
import { getAllGernes } from "./slices/gernes/reducers";
import { getAllUsers } from "./slices/users/reducers";

// pre-fetch
store.dispatch(getAllRoles());
store.dispatch(getAllUsers());
store.dispatch(getAllGernes());

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
