import React from "react";

import LayoutPage from "../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../components/static/TableWrapper";

const RecordPage = () => {
	return (
		<LayoutPage
			heading="Kho bản ghi"
			quickButtonData={[{ description: "Quản lý phê duyệt", onClick: () => {} }]}>
			<div>
				<TableWrapper />
			</div>
		</LayoutPage>
	);
};

export default RecordPage;
