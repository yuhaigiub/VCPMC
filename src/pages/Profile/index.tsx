import React, { useState, useEffect } from "react";
import style from "./ProfilePage.module.css";

import { Input, Form, Select } from "antd";

import LayoutPage from "../../components/Layouts/Page/LayoutPage";
import { useAuth } from "../../app/AuthContext";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { getUserByEmail, updateUser } from "../../slices/users/reducers";
import { UserTable } from "../../types/data";
import { getRole } from "../../slices/roles/reducers";
import { getAllRolesQuery } from "../../slices/roles/selectors";

const ProfilePage = () => {
	const [form] = Form.useForm();
	const dispatch = useAppDispatch();
	const authContext = useAuth();
	const currentUser = authContext.currentUser;

	const rolesList = useAppSelector(getAllRolesQuery);

	const [edit, setEdit] = useState<boolean>(false);
	const [data, setData] = useState<UserTable>({
		key: "",
		fullname: "",
		username: "",
		dateExpired: new Date(),
		email: "",
		gender: "male",
		isActive: false,
		password: "",
		phone: "",
		roleId: "",
	});

	useEffect(() => {
		if (currentUser !== null) {
			dispatch(getUserByEmail(currentUser.email))
				.unwrap()
				.then((user) => {
					if (user !== null) {
						dispatch(getRole(user.roleId))
							.unwrap()
							.then((role) => {
								if (role !== null) {
									form.setFieldsValue({
										fullname: user.fullname,
										gender: user.gender,
										phone: user.phone,
										email: user.email,
										username: user.username,
										role: role.name,
									});
									setData(user);
								}
							});
					}
				});
		}
	}, [currentUser]);

	return (
		<LayoutPage
			heading="Thông tin cơ bản"
			quickButtonData={[
				{
					description: "Sửa thông tin",
					onClick: () => {
						setEdit((value) => !value);
					},
				},
				{ description: "Đổi mật khẩu", onClick: () => {} },
				{ description: "Đăng xuất", onClick: () => {} },
			]}>
			<Form
				className={style.container}
				form={form}
				onFinish={(values) => {
					console.log(values);
					authContext.editEmail(values.email).then((res: any) => {
						authContext.editPassword(values.password).then((res: any) => {
							dispatch(updateUser({ id: data.key, data: values }))
								.unwrap()
								.then((updatedUser) => {
									setEdit((value) => !value);
								});
						});
					});
				}}>
				<div className={style.leftContainer}>
					<div className={style.image}>
						<div className={style.chooseImgButton}></div>
					</div>
					<div className={style.username}>{data.fullname}</div>
				</div>
				<div className={style.rightContainer}>
					<div className={style.field}>
						<div className={style.label}>Họ tên:</div>
						<Form.Item name="fullname" noStyle>
							<Input disabled={!edit} />
						</Form.Item>
					</div>
					<div className={style.field}>
						<div className={style.label}>Giới tính:</div>
						<Form.Item name="gender" noStyle>
							<Select
								disabled={!edit}
								options={[
									{ label: "Nam", value: "male" },
									{ label: "Nữ", value: "female" },
								]}
							/>
						</Form.Item>
					</div>
					<div className={style.field}>
						<div className={style.label}>Số điện thoại:</div>
						<Form.Item name="phone" noStyle>
							<Input disabled={!edit} />
						</Form.Item>
					</div>
					<div className={style.field}>
						<div className={style.label}>Email:</div>
						<Form.Item name="email" noStyle>
							<Input disabled={!edit} />
						</Form.Item>
					</div>
					<div className={style.field}>
						<div className={style.label}>Tên đăng nhập:</div>
						<Form.Item name="username" noStyle>
							<Input disabled={!edit} />
						</Form.Item>
					</div>
					<div className={style.field}>
						<div className={style.label}>Phân quyền:</div>
						<Form.Item name="role" noStyle>
							<Select
								disabled={!edit}
								options={rolesList.map((role) => {
									return { label: role.name, value: role.key };
								})}
							/>
						</Form.Item>
					</div>
					{edit ? (
						<div style={{ gridColumn: "1/3", display: "flex", justifyContent: "center" }}>
							<button className={style.submitButton} type="submit">
								Lưu
							</button>
						</div>
					) : (
						<></>
					)}
				</div>
			</Form>
		</LayoutPage>
	);
};

export default ProfilePage;
