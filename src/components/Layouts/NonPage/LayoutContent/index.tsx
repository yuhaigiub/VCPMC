import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../app/AuthContext";
import { useAppDispatch } from "../../../../app/store";
import { getRole } from "../../../../slices/roles/reducers";
import { getUserByEmail } from "../../../../slices/users/reducers";
import style from "./LayoutContent.module.css";

const LayoutContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const authContext = useAuth();
	const user = authContext.currentUser;
	const [data, setData] = useState({ fullname: "Anonymous", role: "none" });

	useEffect(() => {
		if (user !== null) {
			dispatch(getUserByEmail(user.email))
				.unwrap()
				.then((userData) => {
					if (userData !== null) {
						dispatch(getRole(userData.roleId))
							.unwrap()
							.then((role) => {
								if (role !== null) {
									setData({
										fullname: userData.fullname,
										role: role.name,
									});
								}
							});
					}
				});
		}
	}, [user]);

	return (
		<div className={style.container}>
			<div className={style.topRightContainer}>
				<div className={style.language}></div>
				<div
					className={style.user}
					onClick={() => {
						navigate("/profile");
					}}>
					<div className={style.avatar}></div>
					<div>
						<div className={style.name}>{data.fullname}</div>
						<div className={style.role}>{data.role}</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default LayoutContent;
