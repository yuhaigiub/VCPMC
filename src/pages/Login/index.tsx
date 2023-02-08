import React, { useEffect, useState } from "react";
import style from "./LoginPage.module.css";

import { useNavigate } from "react-router-dom";

import { Form, Input } from "antd";
import { useAppDispatch } from "../../app/store";
import { getUserByUsername } from "../../slices/users/reducers";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../app/firebaseConfig";
import { useAuth } from "../../app/AuthContext";

const LoginPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const authContext = useAuth();
	const [allowRender, setAllowRender] = useState<boolean>(false);

	useEffect(() => {
		const subscriber = onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate("/profile");
			} else {
				setAllowRender(true);
			}
		});

		return subscriber;
	});

	return allowRender ? (
		<div className={style.container}>
			<div className={style.image}></div>
			<Form
				layout="vertical"
				className={style.form}
				onFinish={(values) => {
					dispatch(getUserByUsername(values.username))
						.unwrap()
						.then((user) => {
							if (user !== null && user.password === values.password) {
								authContext
									.signIn({ email: user.email, password: user.password })
									.then((res: any) => {
										navigate("/");
									});
							} else {
								console.log("invalid user");
							}
						});
				}}>
				<div className={style.title}>Đăng nhập</div>
				<Form.Item
					name="username"
					label={<span style={{ fontWeight: 700 }}>Tên đăng nhập:</span>}
					style={{ width: "100%" }}
					rules={[{ required: true, message: "Vui lòng nhập Tên đăng nhập" }]}>
					<Input />
				</Form.Item>
				<Form.Item
					name="password"
					label={<span style={{ fontWeight: 700 }}>Mật khẩu:</span>}
					style={{ width: "100%" }}
					rules={[{ required: true, message: "Vui lòng nhập Mật khẩu" }]}>
					<Input.Password />
				</Form.Item>
				<button className={style.button}>Đăng nhập</button>
			</Form>
		</div>
	) : (
		<></>
	);
};

export default LoginPage;
