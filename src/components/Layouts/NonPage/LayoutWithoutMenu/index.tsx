import React, { useRef } from "react";
import style from "./LayoutWithoutMenu.module.css";

import { Outlet } from "react-router-dom";

import MenuWrapper from "../../../static/MenuWrapper";

const LayoutWithoutMenu: React.FC = () => {
	const menuContainerRef = useRef<HTMLDivElement>(null);
	const arrowRef = useRef<HTMLDivElement>(null);

	return (
		<div className={style.container}>
			<div
				ref={menuContainerRef}
				className={style.menuContainer}
				onMouseOver={() => {
					if (menuContainerRef.current) {
						menuContainerRef.current.style.left = "0";
					}
				}}
				onMouseLeave={() => {
					if (menuContainerRef.current) {
						menuContainerRef.current.style.left = "calc(-1 * var(--menu-width))";
					}
				}}>
				<div
					className={style.menu}
					onMouseEnter={() => {
						if (menuContainerRef.current) {
							menuContainerRef.current.style.left = "0";
						}
						if (arrowRef.current) {
							arrowRef.current.style.backgroundColor = "inherit";
							arrowRef.current.innerText = "";
						}
					}}
					onMouseLeave={() => {
						if (menuContainerRef.current) {
							menuContainerRef.current.style.left = "calc(-1 * var(--menu-width))";
						}
						if (arrowRef.current) {
							arrowRef.current.style.backgroundColor = "#313131";
							arrowRef.current.innerText = "▶";
						}
					}}>
					<MenuWrapper />
				</div>
				<div className={style.arrow} ref={arrowRef}>
					{"▶"}
				</div>
			</div>
			<div className={style.contentContainer}>
				<Outlet />
			</div>
		</div>
	);
};

export default LayoutWithoutMenu;
