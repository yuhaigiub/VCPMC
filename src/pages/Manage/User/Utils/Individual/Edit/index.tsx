import React from "react";

import style from "./User_IndividualEditPage.module.css";

import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TwoButtonsWrapper from "../../../../../../components/static/TwoButtonsWrapper";
import TextField from "../../../../../../components/custom/TextField";
import { Input, Select } from "antd";

const User_IndividualEditPage = () => {
	return (
		<LayoutPage
			heading="Chỉnh sửa thông tin"
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Đơn vị sử dụng", path: "/manage/user" },
				{ name: "Chi tiết", path: "/manage/user/detail" },
				{ name: "Chỉnh sửa thông tin", path: "manage/user/individual/edit" },
			]}>
			<div className={style.container}>
				<div className={style.leftContainer}>
					<TextField title="Tên người dùng" value={<Input />} />
					<TextField title="Email" value={<Input />} />
					<TextField title="Vai trò" value={<Select style={{ width: "100%" }} />} />
				</div>
				<div className={style.rightContainer}>
					<TextField title="Tên đăng nhập" value={<Input />} />
					<TextField title="Mật khẩu" value={<Input />} />
					<TextField title="Nhập lại mật khẩu" value={<Input />} />
				</div>
			</div>
			<TwoButtonsWrapper />
		</LayoutPage>
	);
};

export default User_IndividualEditPage;
