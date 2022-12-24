import React from "react";
import commonStyle from "../../pageLayout.module.css";

import LayoutContent from "../../../components/Layouts/NonPage/LayoutContent";
import LayoutContentInner from "../../../components/Layouts/NonPage/LayoutContentInner";
import QuickButtonGroup from "../../../components/QuickButtonGroup";
import BreadcrumbWrapper from "../../../components/BreadcrumbWrapper";
import LayoutContentButtonsBottom from "../../../components/Layouts/NonPage/LayoutContentButtonsBottom";

const AddPlaylistPage = () => {
	return (
		<LayoutContent>
			<QuickButtonGroup /> {/*pass params */}
			<LayoutContentInner>
				<BreadcrumbWrapper /> {/*pass params */}
				<div className={commonStyle.heading}>Thông tin cơ bản</div>
				<div className={commonStyle.content}>
					<LayoutContentButtonsBottom />
				</div>
			</LayoutContentInner>
		</LayoutContent>
	);
};

export default AddPlaylistPage;
