import React from "react";

import { Routes, Route } from "react-router-dom";
import LayoutWithMenu from "./components/LayoutWithMenu";
import LayoutWithoutMenu from "./components/LayoutWithoutMenu";
import TableWrapper from "./components/TableWrapper";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LayoutWithMenu />}>
				<Route path="manage">
					<Route path="contract" element={<TableWrapper />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
