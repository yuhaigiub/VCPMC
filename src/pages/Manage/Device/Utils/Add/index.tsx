import React from "react";
import style from "./DeviceAddPage.module.css";

import { Input, Select, DatePicker } from "antd";

import LayoutPage from "../../../../../components/Layouts/Page/LayoutPage";
import TwoButtonsWrapper from "../../../../../components/static/TwoButtonsWrapper";
import TextField from "../../../../../components/custom/TextField";

const DeviceAddPage = () => {
	return (
		<LayoutPage
			heading="Thêm thiết bị mới"
			breadcrumbData={[
				{ name: "Danh sách thiết bị", path: "?" },
				{ name: "Thêm thiét bị mới", path: "/manage/device/add" },
			]}>
			<div className={style.container}>
				<div className={style.leftContainer}>
					<TextField title="Tên thiết bị" value={<Input />} />
					<TextField title="SKU/ID" value={<Input />} />
					<TextField title="Địa chỉ MAC" value={<Input />} />
					<TextField title="Thời hạn bảo hành" value={<DatePicker />} />
					<TextField title="Thông tin" value={<Select style={{ width: "100%" }} />} />
					<TextField title="Ghi chú" value={<Input.TextArea />} />
				</div>
				<div className={style.rightContainer}>
					<TextField title="Tên đăng nhập" value={<Input />} />
					<TextField title="Mật khẩu" value={<Input />} />
					<TextField title="Nhập lại mật khẩu" value={<Input />} />
					<TextField title="Vị trí" value={<Input />} />
				</div>
			</div>
			<TwoButtonsWrapper />
		</LayoutPage>
	);
};

export default DeviceAddPage;
