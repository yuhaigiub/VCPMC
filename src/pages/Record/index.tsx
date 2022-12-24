import React from "react";
import LayoutContent from "../../components/Layouts/NonPage/LayoutContent";
import QuickButtonGroup from "../../components/QuickButtonGroup";

const RecordPage = () => {
	return (
		<LayoutContent>
			<QuickButtonGroup />
			<div style={{ width: "100%", height: "100%", backgroundColor: "darkblue" }}></div>
		</LayoutContent>
	);
};

export default RecordPage;
