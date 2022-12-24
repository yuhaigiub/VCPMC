import React from "react";
import commonStyle from "../pageLayout.module.css";

import LayoutContent from "../../components/Layouts/NonPage/LayoutContent";
import LayoutContentInner from "../../components/Layouts/NonPage/LayoutContentInner";
import QuickButtonGroup from "../../components/QuickButtonGroup";
import BreadcrumbWrapper from "../../components/BreadcrumbWrapper";

const PlaylistPage = () => {
	return (
		<LayoutContent>
			<QuickButtonGroup />
			<LayoutContentInner>
				<BreadcrumbWrapper />
				<div className={commonStyle.heading}>Thông tin cơ bản</div>
				<div className={commonStyle.content}></div>
			</LayoutContentInner>
		</LayoutContent>
	);
};

export default PlaylistPage;
