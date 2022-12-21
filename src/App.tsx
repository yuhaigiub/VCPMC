import React from "react";

import { Routes, Route } from "react-router-dom";
import LayoutWithMenu from "./components/Layouts/LayoutWithMenu";
import LayoutWithoutMenu from "./components/Layouts/LayoutWithoutMenu";
import TableWrapper from "./components/TableWrapper";
import Records from "./pages/Records";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LayoutWithMenu />}>
				<Route path="records">
					<Route index element={<Records />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
