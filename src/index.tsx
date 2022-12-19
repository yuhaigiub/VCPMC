import React from "react";
import ReactDOM from "react-dom/client";

import { ConfigProvider } from "antd";

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ConfigProvider>
			<App />
		</ConfigProvider>
	</React.StrictMode>
);
