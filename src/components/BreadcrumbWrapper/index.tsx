import React from "react";
import { Breadcrumb, ConfigProvider } from "antd";

import style from "./BreadcrumbWrapper.module.css";

const items = [
	{ name: "Home", path: "/" },
	{ name: "Profile", path: "/profile" },
	{ name: "Playlist", path: "/playlsit" },
];

const BreadcrumbWrapper = () => {
	const len = items.length;

	return (
		<div className={style.container}>
			{items.map((item, index) => (
				<div key={item.path} className={style.itemContainer}>
					<div className={style.text}>{item.name}</div>
					<span className={style.separator} style={{ display: index === len - 1 ? "none" : "" }}>
						{">"}
					</span>
				</div>
			))}
		</div>
	);
};

export default BreadcrumbWrapper;
