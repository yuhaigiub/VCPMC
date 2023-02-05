import { ColumnsType } from "antd/es/table";
import React from "react";
import { useAppSelector } from "../../../../../app/store";

import TableWrapper from "../../../../../components/static/TableWrapper";
import { getAllRolesQuery } from "../../../../../slices/roles/selectors";
import { getAllUsersQuery } from "../../../../../slices/users/selectors";
import { RoleTable, UserTable } from "../../../../../types/data";

const RoleUserList = () => {
	const rolesData: RoleTable[] = useAppSelector(getAllRolesQuery);
	const usersData: UserTable[] = useAppSelector(getAllUsersQuery);

	const columns: ColumnsType<UserTable> = [
		{
			title: "ID",
			dataIndex: "key",
			key: "key",
		},
		{
			title: "Tên đăng nhập",
			dataIndex: "username",
			key: "username",
		},

		{
			title: "Tên vai trò",
			dataIndex: "roleId",
			key: "roleId",
			render: (text) => {
				const role = rolesData.find((role) => role.key === text)?.name || "not found";
				return <>{role}</>;
			},
		},
		{
			title: "Họ tên",
			dataIndex: "fullname",
			key: "fullname",
		},
		{
			title: "Giới tính",
			dataIndex: "gender",
			key: "gender",
			render: (text) => (text === "male" ? "Nam" : "Nữ"),
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Trạng thái hoạt động",
			key: "isActive",
			render: (_, record) => {
				return <span>{record.isActive ? "Đang hoạt động" : "Ngừng hoạt động"}</span>;
			},
		},
	];

	return <TableWrapper dataSource={usersData} columns={columns} />;
};

export default RoleUserList;
