import React, { useContext } from "react";
import style from "./RoleUserAddPage.module.css";

import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TextField from "../../../../../../components/custom/TextField";
import { Radio, Form } from "antd";
import TwoButtonsWrapper from "../../../../../../components/static/TwoButtonsWrapper";
import {
	FormWrapDatePicker,
	FormWrapInput,
	FormWrapSelect,
} from "../../../../../../components/custom/FormWrap";
import { addUser } from "../../../../../../slices/users/reducers";
import { useAppDispatch, useAppSelector } from "../../../../../../app/store";
import { useNavigate } from "react-router-dom";
import { RoleTable } from "../../../../../../types/data";
import { getAllRolesQuery } from "../../../../../../slices/roles/selectors";
import { useAuth } from "../../../../../../app/AuthContext";

const RoleUserAddPage = () => {
	const authContext = useAuth();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [form] = Form.useForm();

	const roles: RoleTable[] = useAppSelector(getAllRolesQuery);

	const genderRadio = (
		<Form.Item name="gender">
			<Radio.Group>
				<Radio value="male">Nam</Radio>
				<Radio value="female">Nữ</Radio>
			</Radio.Group>
		</Form.Item>
	);

	return (
		<LayoutPage
			heading="Thêm người dùng mới"
			breadcrumbData={[
				{ name: "Cài đặt", path: "?" },
				{ name: "Phân quyền người dùng", path: "/setting/role" },
				{ name: "Thêm người dùng", path: "/setting/role/user/add" },
			]}>
			<Form
				form={form}
				onFinish={(values) => {
					const data = {
						...values,
						dateExpired: values.dateExpired.toDate(),
						isActive: true,
					};
					dispatch(addUser(data)).then((res) => {
						authContext
							.signUp({ email: values.email, password: values.password })
							.then((res: any) => {
								navigate(-1);
							});
					});
				}}>
				<div className={style.container}>
					<div className={style.leftContainer}>
						<TextField title="Họ Tên" value={<FormWrapInput name="fullname" />} />
						<TextField title="Số điện thoại" value={<FormWrapInput name="phone" />} />
						<TextField title="Ngày hết hạn" value={<FormWrapDatePicker name="dateExpired" />} />
						<TextField
							title="Vai trò"
							value={
								<FormWrapSelect
									name="roleId"
									options={roles.map((role) => {
										return {
											value: role.key,
											label: role.name,
										};
									})}
								/>
							}
						/>
						<TextField title="Giới tính" value={genderRadio} />
					</div>
					<div className={style.rightContainer}>
						<TextField title="Email" value={<FormWrapInput name="email" />} />
						<TextField title="Tên đăng nhập" value={<FormWrapInput name="username" />} />
						<TextField title="Mật khẩu" value={<FormWrapInput name="password" />} />
					</div>
				</div>
				<TwoButtonsWrapper />
			</Form>
		</LayoutPage>
	);
};

export default RoleUserAddPage;
