import React from "react";
import style from "./CompanyEditPage.module.css";

import { Input, Select, Radio } from "antd";

import LayoutPage from "../../../../../components/Layouts/Page/LayoutPage";
import TwoButtonsWrapper from "../../../../../components/static/TwoButtonsWrapper";
import TextField from "../../../../../components/custom/TextField";

const CompanyEditPage = () => {
	return (
		<LayoutPage
			heading="Cập nhật thông tin"
			breadcrumbData={[
				{
					name: "Quản lý",
					path: "?",
				},
				{
					name: "Đối tác ủy quyền",
					path: "/manage/company",
				},
				{
					name: "Cập nhật thông tin",
					path: "/manage/company/edit",
				},
			]}>
			<div className={style.container}>
				<div className={style.leftContainer}>
					<TextField title="Tên người dùng" value={<Input />} />
					<TextField title="Email" value={<Input />} />
					<TextField title="Số điện thoại" value={<Input />} />
					<TextField title="Vai trò" value={<Select style={{ width: "100%" }} />} />
				</div>
				<div className={style.leftContainer}>
					<TextField title="Tên đăng nhập" value={<Input />} />
					<TextField title="Mật khẩu" value={<Input />} />
					<TextField title="Nhập lại mật khẩu" value={<Input />} />
					<TextField
						title="Trạng thái"
						value={
							<Radio.Group>
								<Radio value={true}>Đã kích hoạt</Radio>
								<Radio value={false}>Ngưng kích hoạt</Radio>
							</Radio.Group>
						}
					/>
				</div>
			</div>
			<TwoButtonsWrapper />
		</LayoutPage>
	);
};

export default CompanyEditPage;
