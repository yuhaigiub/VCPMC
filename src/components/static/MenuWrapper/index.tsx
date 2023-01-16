import React from "react";

import { Menu, ConfigProvider } from "antd";
import { MenuProps } from "rc-menu";
import MenuItem from "./MenuItem";
import RecordIcon from "../../../icons/RecordIcon";
import PlaylistIcon from "../../../icons/PlaylistIcon";
import ScheduleIcon from "../../../icons/ScheduleIcon";
import ManageIcon from "../../../icons/ManageIcon";
import StatisticIcon from "../../../icons/StatisticIcon";
import SettingIcon from "../../../icons/SettingIcon";
import SupportIcon from "../../../icons/SupportIcon";
import ExpandIcon from "../../../icons/ExpandIcon";

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
			<Menu items={items} theme="dark" expandIcon={<ExpandIcon />} />
		</ConfigProvider>
	);
};

export default MenuWrapper;

const items: MenuProps["items"] = [
	{ label: <MenuItem title="Kho bản ghi" icon={<RecordIcon />} />, key: "1" },
	{ label: <MenuItem title="Playlist" icon={<PlaylistIcon />} />, key: "2" },
	{ label: <MenuItem title="Lập lịch phát" icon={<ScheduleIcon />} />, key: "3" },
	{
		label: <MenuItem title="Quản lý" icon={<ManageIcon />} />,
		key: "4",
		children: [
			{ label: "Quản lý hợp đồng", key: "4.1" },
			{ label: "Quản lý khách hàng", key: "4.2" },
			{ label: "Đơn vị ủy quyền", key: "4.3" },
			{ label: "Đơn vị sử dụng", key: "4.4" },
		],
	},
	{
		label: <MenuItem title="Doanh thu" icon={<StatisticIcon />} />,
		key: "5",
		children: [
			{ label: "Báo cáo doanh thu", key: "5.1" },
			{ label: "Lịch sử đối soát", key: "5.2" },
			{ label: "Phân phối doanh thu", key: "5.3" },
		],
	},
	{
		label: <MenuItem title="Cài đặt" icon={<SettingIcon />} />,
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
		label: <MenuItem title="Hỗ trợ" icon={<SupportIcon />} />,
		key: "7",
		children: [
			{ label: "Hướng dẫn sử dụng", key: "7.1" },
			{ label: "Tải app", key: "7.2" },
			{ label: "Feedback", key: "7.3" },
		],
	},
];
