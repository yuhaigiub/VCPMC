import React from "react";
import style from "./RecordEditPage.module.css";

import LayoutPage from "../../../../components/Layouts/Page/LayoutPage";
import TwoButtonsWrapper from "../../../../components/static/TwoButtonsWrapper";
import { Input } from "antd";

const RecordEditPage = () => {
	return (
		<LayoutPage
			heading={`Bản ghi - ${"Name"}`}
			breadcrumbData={[
				{ name: "Bản ghi", path: "/record" },
				{ name: "Cập nhật thông tin", path: "/record/edit" },
			]}
			quickButtonData={[{ description: "Xóa bản ghi", onClick: () => {} }]}>
			<div className={style.container}>
				<div className={style.first}>
					<div className={style.title}>Thông tin bản ghi</div>
					<div className={style.image}></div>
					<div>Matem.mp3</div>
					<div
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							gap: "0.5em",
						}}>
						<div className={style.fullWidthContainer}>
							<div className={style.label}>Ngày thêm:</div>
							<div>07/04/2021 - 17:45:30</div>
						</div>
						<div className={style.fullWidthContainer}>
							<div className={style.label}>Người tải lên:</div>
							<div>Super Admin</div>
						</div>
						<div className={style.fullWidthContainer}>
							<div className={style.label}>Người duyệt</div>
							<div>Hệ thống</div>
						</div>
						<div className={style.fullWidthContainer}>
							<div className={style.label}>Ngày duyệt</div>
							<div>test</div>
						</div>
					</div>
				</div>
				<div className={style.second}>
					<div className={style.title}>Thông tin ủy quyền</div>
					<div
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							gap: "0.5em",
						}}>
						<div className={style.fullWidthContainer}>
							<div className={style.label}>Số hợp đồng:</div>
							<div>696969</div>
						</div>
						<div className={style.fullWidthContainer}>
							<div className={style.label}>Ngày nhận ủy quyền:</div>
							<div>test</div>
						</div>
						<div className={style.fullWidthContainer}>
							<div className={style.label}>Ngày hết hạn:</div>
							<div>test</div>
						</div>
						<div className={style.fullWidthContainer}>
							<div className={style.label}>Trạng thái:</div>
							<div>test</div>
						</div>
					</div>
				</div>
				<div className={style.third}>
					<div className={style.title}>Chỉnh sửa thông tin</div>
					<div className={style.inputContainer}>
						<div className={style.label}>Tên bản ghi:</div>
						<Input />
					</div>
					<div className={style.inputContainer}>
						<div className={style.label}>Mã ISRC:</div>
						<Input />
					</div>
					<div className={style.inputContainer}>
						<div className={style.label}>Ca sĩ:</div>
						<Input />
					</div>
					<div className={style.inputContainer}>
						<div className={style.label}>Tác giả:</div>
						<Input />
					</div>
					<div className={style.inputContainer}>
						<div className={style.label}>Nhà sản xuất:</div>
						<Input />
					</div>
					<div className={style.inputContainer}>
						<div className={style.label}>Thể loại:</div>
						<Input />
					</div>
				</div>
			</div>
			<TwoButtonsWrapper />
		</LayoutPage>
	);
};

export default RecordEditPage;
