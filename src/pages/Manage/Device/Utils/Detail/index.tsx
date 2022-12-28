import React from "react";
import style from "./DeviceDetailPage.module.css";

import LayoutPage from "../../../../../components/Layouts/Page/LayoutPage";
import TextField from "../../../../../components/custom/TextField";

const DeviceDetailPage = () => {
	return (
		<LayoutPage
			heading={`Thông tin thiết bị - ${"Name"}`}
			breadcrumbData={[
				{ name: "Danh sách thiết bị", path: "?" },
				{ name: "Chi tiết thiết bị", path: "/manage/device/detail" },
			]}
			quickButtonData={[
				{ description: "Chỉnh sửa", onClick: () => {} },
				{ description: "Khôi phục mật khẩu", onClick: () => {} },
				{ description: "Khôi phục bộ nhớ", onClick: () => {} },
			]}>
			<div className={style.container}>
				<div className={style.firstContainer}>
					<div className={style.title}>Thông tin thiết bị</div>
					<div className={style.image}></div>
					<div>Hoạt động</div>
					<TextField
						title="Ghi chú"
						value="test test test test test test test test test test test test test test test test test test test test test test test test"
					/>
				</div>
				<div className={style.secondContainer}>
					<div className={style.title}>Device123</div>
					<TextField title="SKU/ID" />
					<TextField title="Địa chỉ MAC" />
					<TextField title="Tên đăng nhập" />
					<TextField title="Định dạng" />
					<TextField title="Vị trí" />
					<TextField title="Thời hạn bảo hành" />
					<TextField title="Trạng thái thiết bị" />
				</div>
				<div className={style.thirdContainer}>
					<div className={style.title}>Thông tin phiên bản</div>
					<TextField title="Phiên bản cũ nhất" value="12.3 (20/02/2020)" />
				</div>
				<div className={style.fourthContainer}>
					<div className={style.title}>Dung lượng bộ nhớ</div>
					<TextField title="Dung lượng" value="512 GB" />
					<TextField title="Còn trống" value="512 GB" />
				</div>
			</div>
		</LayoutPage>
	);
};

export default DeviceDetailPage;
