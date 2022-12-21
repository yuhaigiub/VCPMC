import React from "react";

import { Menu, ConfigProvider } from "antd";
import { MenuProps } from "rc-menu";

const MenuWrapper = () => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						radiusItem: 0,
						itemMarginInline: 0,
						colorItemText: "#fff",
						colorItemBg: "#020220",
						colorItemTextHover: "#ff7506",
						colorItemBgHover: "#2c2c2c",
						colorItemTextSelected: "#ff7506",
						colorItemBgSelected: "#1e1e2e",
					},
				},
			}}>
			<Menu items={items} theme="dark" />;
		</ConfigProvider>
	);
};

export default MenuWrapper;

const items: MenuProps["items"] = [
	{ label: "Kho bản ghi", key: "1" },
	{ label: "Playlist", key: "2" },
	{ label: "Lập lịch phát", key: "3" },
	{
		label: "Quản lý",
		key: "4",
		children: [
			{ label: "Quản lý hợp đồng", key: "4.1" },
			{ label: "Quản lý khách hàng", key: "4.2" },
			{ label: "Đơn vị ủy quyền", key: "4.3" },
			{ label: "Đơn vị sử dụng", key: "4.4" },
		],
	},
	{
		label: "Doanh thu",
		key: "5",
		children: [
			{ label: "Báo cáo doanh thu", key: "5.1" },
			{ label: "Lịch sử đối soát", key: "5.2" },
			{ label: "Phân phối doanh thu", key: "5.3" },
		],
	},
	{
		label: "Cài đặt",
		key: "6",
		children: [
			{ label: "Phân quyền người dùng", key: "6.1" },
			{ label: "Cấu hình", key: "6.2" },
			{ label: "Quản lý hợp đồng", key: "6.3" },
			{ label: "Thông tin sản phẩm", key: "6.4" },
			{ label: "Chu kỳ đối soát", key: "6.5" },
		],
	},
	{
		label: "Hỗ trợ",
		key: "7",
		children: [
			{ label: "Hướng dẫn sử dụng", key: "7.1" },
			{ label: "Tải app", key: "7.2" },
			{ label: "Feedback", key: "7.3" },
		],
	},
];
