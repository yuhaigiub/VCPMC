import React from "react";
import style from "./LayoutContentInner.module.css";

const LayoutContentInner: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return <div className={style.container}>{children}</div>;
};

export default LayoutContentInner;
