import React from "react";

import style from "./LayoutPage.module.css";

import LayoutContent from "../../NonPage/LayoutContent";
import QuickButtonGroup from "../../../custom/QuickButtonGroup";
import LayoutContentInner from "../../NonPage/LayoutContentInner";
import BreadcrumbWrapper from "../../../custom/BreadcrumbWrapper";
import { BreadcrumbType } from "../../../../types/interface";

const LayoutPage: React.FC<Props> = ({ children, breadcrumbData, heading }) => {
	return (
		<LayoutContent>
			<QuickButtonGroup /> {/*pass params */}
			<LayoutContentInner>
				<BreadcrumbWrapper items={breadcrumbData} />
				<div className={style.heading}>{heading || "No Heading Provided"}</div>
				<div className={style.content}>{children}</div>
			</LayoutContentInner>
		</LayoutContent>
	);
};

export default LayoutPage;

interface Props {
	children?: React.ReactNode;
	breadcrumbData?: BreadcrumbType;
	heading?: string;
}
