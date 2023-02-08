import React from "react";
import style from "./RoleRoleAddPage.module.css";

import { Checkbox, Input } from "antd";
import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TwoButtonsWrapper from "../../../../../../components/static/TwoButtonsWrapper";

const RoleRoleAddPage = () => {
	return (
		<LayoutPage
			heading="Thêm vai trò người dùng"
			breadcrumbData={[
				{ name: "Cài đặt", path: "?" },
				{ name: "Phân quyền người dùng", path: "/setting/role" },
				{ name: "Thêm vai trò", path: "/setting/role/role/add" },
			]}>
			<div className={style.container}>
				<div className={style.leftContainer}>
					<div className={style.fieldContainer}>
						<div className={style.title}>Tên vai trò:</div>
						<Input />
					</div>
					<div className={style.fieldContainer}>
						<div className={style.title}>Mô tả:</div>
						<Input.TextArea autoSize={{ minRows: 15, maxRows: 15 }} />
					</div>
				</div>
				<div className={`${style.rightContainer} ${style.fieldContainer}`}>
					<div className={style.title}>Phân quyền chức năng:</div>
					<div className={style.roleContainer}>
						<div className={style.roleHeaderContainer}>
							<div className={style.roleHeader}>Tên nhóm chức năng</div>
							<div>
								<Checkbox
									onClick={() => {
										console.log("Hello");
									}}>
									<div className={style.roleHeader}>Mã chức năng</div>
								</Checkbox>
							</div>
							<div className={style.roleHeader}>Chức năng</div>
						</div>
					</div>
				</div>
			</div>
			<TwoButtonsWrapper />
		</LayoutPage>
	);
};

export default RoleRoleAddPage;
