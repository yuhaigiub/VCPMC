import React from "react";

import style from "./User_IndividualDetailPage.module.css";

import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TextField from "../../../../../../components/custom/TextField";

const User_IndividualDetailPage = () => {
	return (
		<LayoutPage
			heading="Thông tin người dùng"
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Đơn vị sử dụng", path: "/manage/user" },
				{ name: "Chi tiết", path: "/manage/user/detail" },
				{ name: "Thông tin người dùng", path: "manage/user/individual/detail" },
			]}>
			<div className={style.container}>
				<div className={style.leftContainer}>
					<TextField title="Tên người dùng" />
					<TextField title="Email" />
					<TextField title="Vai trò" />
				</div>
				<div className={style.rightContainer}>
					<TextField title="Tên đăng nhập" />
					<TextField title="Mật khẩu" />
					<TextField title="Nhập lại mật khẩu" />
				</div>
			</div>
		</LayoutPage>
	);
};

export default User_IndividualDetailPage;
