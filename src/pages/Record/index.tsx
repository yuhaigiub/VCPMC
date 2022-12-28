import React from "react";

import LayoutPage from "../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../components/static/TableWrapper";

const RecordPage = () => {
	return (
		<LayoutPage heading="Kho bản ghi">
			<div>
				<TableWrapper />
			</div>
		</LayoutPage>
	);
};

export default RecordPage;
