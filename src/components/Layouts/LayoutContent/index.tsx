import React from "react";
import style from "./LayoutContent.module.css";

const LayoutContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<div className={style.container}>
			<div className={style.topRightContainer}>
				<div className={style.language}></div>
				<div className={style.user}>
					<div className={style.avatar}></div>
					<div>
						<div className={style.name}>Bùi Gia Huy</div>
						<div className={style.role}>admin</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default LayoutContent;
