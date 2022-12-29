import React from "react";
import style from "./RoleUserAddPage.module.css";

import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TextField from "../../../../../../components/custom/TextField";
import { DatePicker, Input, Select } from "antd";
import TwoButtonsWrapper from "../../../../../../components/static/TwoButtonsWrapper";

const RoleUserAddPage = () => {
	return (
		<LayoutPage
			heading="Thêm người dùng mới"
			breadcrumbData={[
				{ name: "Cài đặt", path: "?" },
				{ name: "Phân quyền người dùng", path: "/setting/role" },
				{ name: "Thêm người dùng", path: "/setting/role/user/add" },
			]}>
			<div className={style.container}>
				<div className={style.leftContainer}>
					<TextField title="Tên người dùng" value={<Input />} />
					<TextField title="Số điện thoại" value={<Input />} />
					<TextField title="Ngày hết hạn" value={<DatePicker style={{ width: "100%" }} />} />
					<TextField title="Vai trò" value={<Select style={{ width: "100%" }} />} />
				</div>
				<div className={style.rightContainer}>
					<TextField title="Email" value={<Input />} />
					<TextField title="Tên đăng nhập" value={<Input />} />
					<TextField title="Mật khẩu" value={<Input />} />
				</div>
			</div>
			<TwoButtonsWrapper />
		</LayoutPage>
	);
};

export default RoleUserAddPage;
