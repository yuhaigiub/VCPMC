import React from "react";
import style from "./ProfilePage.module.css";

import { DatePicker, Input } from "antd";

import LayoutPage from "../../components/Layouts/Page/LayoutPage";

const ProfilePage = () => {
	return (
		<LayoutPage
			heading="Thông tin cơ bản"
			quickButtonData={[
				{ description: "Sửa thông tin", onClick: () => {} },
				{ description: "Đổi mật khẩu", onClick: () => {} },
				{ description: "Đăng xuất", onClick: () => {} },
			]}>
			<div className={style.container}>
				<div className={style.leftContainer}>
					<div className={style.image}>
						<div className={style.chooseImgButton}></div>
					</div>
					<div className={style.username}>Bùi Gia Huy</div>
				</div>
				<div className={style.rightContainer}>
					<div className={style.field}>
						<div className={style.label}>Họ:</div>
						<Input />
					</div>
					<div className={style.field}>
						<div className={style.label}>Tên:</div>
						<Input />
					</div>
					<div className={style.field}>
						<div className={style.label}>Ngày sinh:</div>
						<DatePicker />
					</div>
					<div className={style.field}>
						<div className={style.label}>Số điện thoại:</div>
						<Input />
					</div>
					<div className={style.field}>
						<div className={style.label}>Email:</div>
						<Input />
					</div>
					<div className={style.field}>
						<div className={style.label}>Tên đăng nhập</div>
						<Input />
					</div>
					<div className={style.field}>
						<div className={style.label}>Phân quyền</div>
						<Input />
					</div>
				</div>
			</div>
		</LayoutPage>
	);
};

export default ProfilePage;
