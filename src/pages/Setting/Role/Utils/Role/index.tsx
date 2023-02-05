import React from "react";
import { ColumnsType } from "antd/es/table";

import TableWrapper from "../../../../../components/static/TableWrapper";
import { RoleTable } from "../../../../../types/data";
import { useAppSelector } from "../../../../../app/store";
import { getAllRolesQuery } from "../../../../../slices/roles/selectors";

const RoleRoleList = () => {
	const rolesData = useAppSelector(getAllRolesQuery);
	return <TableWrapper maxRow={8} dataSource={rolesData} columns={columns} />;
};

export default RoleRoleList;

const columns: ColumnsType<RoleTable> = [
	{ title: "ID", dataIndex: "key", key: "key" },
	{ title: "Tên vai trò", dataIndex: "name", key: "name" },
	{ title: "Số lượng", dataIndex: "numberOfUsers", key: "numberOfUsers" },
	{ title: "Mô tả", dataIndex: "description", key: "description" },
];
