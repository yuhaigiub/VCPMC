import React from "react";
import LayoutPage from "../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../components/static/TableWrapper";

const SchedulePage = () => {
	return (
		<LayoutPage
			heading="Danh sách lịch phát"
			quickButtonData={[{ description: "Thêm lịch phát", onClick: () => {} }]}>
			<TableWrapper />
		</LayoutPage>
	);
};

export default SchedulePage;
