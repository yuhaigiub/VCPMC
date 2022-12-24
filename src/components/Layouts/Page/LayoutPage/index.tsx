import React from "react";

import style from "./LayoutPage.module.css";

import LayoutContent from "../../NonPage/LayoutContent";
import QuickButtonGroup from "../../../QuickButtonGroup";
import LayoutContentInner from "../../NonPage/LayoutContentInner";
import BreadcrumbWrapper from "../../../BreadcrumbWrapper";

const LayoutPage: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<LayoutContent>
			<QuickButtonGroup /> {/*pass params */}
			<LayoutContentInner>
				<BreadcrumbWrapper /> {/*pass params */}
				<div className={style.heading}>Thông tin cơ bản</div>
				<div className={style.content}>{children}</div>
			</LayoutContentInner>
		</LayoutContent>
	);
};

export default LayoutPage;
