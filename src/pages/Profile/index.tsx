import React from "react";
import BreadcrumbWrapper from "../../components/BreadcrumbWrapper";
import LayoutContent from "../../components/Layouts/LayoutContent";
import LayoutContentInner from "../../components/Layouts/LayoutContentInner";
import QuickButtonGroup from "../../components/QuickButtonGroup";

import style from "./ProfilePage.module.css";

const ProfilePage = () => {
	return (
		<LayoutContent>
			<QuickButtonGroup />
			<LayoutContentInner>
				<BreadcrumbWrapper />
				<div className={style.heading}>Thông tin cơ bản</div>
				<div className={style.content}></div>
			</LayoutContentInner>
		</LayoutContent>
	);
};

export default ProfilePage;
