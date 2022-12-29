import React from "react";
import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import style from "./RoleRoleAddPage.module.css";

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
				<div className={style.leftContainer}></div>
				<div className={style.rightContainer}></div>
			</div>
		</LayoutPage>
	);
};

export default RoleRoleAddPage;
