import React from "react";

import { Menu, ConfigProvider } from "antd";
import MenuItem from "./MenuItem";

import RecordIcon from "../../../icons/RecordIcon";
import PlaylistIcon from "../../../icons/PlaylistIcon";
import ScheduleIcon from "../../../icons/ScheduleIcon";
import ManageIcon from "../../../icons/ManageIcon";
import StatisticIcon from "../../../icons/StatisticIcon";
import SettingIcon from "../../../icons/SettingIcon";
import SupportIcon from "../../../icons/SupportIcon";
import ExpandIcon from "../../../icons/ExpandIcon";

import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const MenuWrapper = () => {
	const navigate = useNavigate();
	const handleClick: MenuProps["onClick"] = (e) => {
		navigate(`/${e.key}`);
	};

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
			<Menu items={items} theme="dark" expandIcon={<ExpandIcon />} onClick={handleClick} />
		</ConfigProvider>
	);
};

export default MenuWrapper;

const items: MenuProps["items"] = [
	{ label: <MenuItem title="Kho bản ghi" icon={<RecordIcon />} />, key: "record" },
	{ label: <MenuItem title="Playlist" icon={<PlaylistIcon />} />, key: "playlist" },
	{ label: <MenuItem title="Lập lịch phát" icon={<ScheduleIcon />} />, key: "schedule" },
	{
		label: <MenuItem title="Quản lý" icon={<ManageIcon />} />,
		key: "manage",
		children: [
			{ label: "Quản lý hợp đồng", key: "manage/contract" },
			{ label: "Quản lý thiết bị", key: "manage/device" },
			{ label: "Đơn vị ủy quyền", key: "manage/user" },
			{ label: "Đơn vị sử dụng", key: "manage/company" },
		],
	},
	{
		label: <MenuItem title="Doanh thu" icon={<StatisticIcon />} />,
		key: "statistic",
		children: [
			{ label: "Báo cáo doanh thu", key: "statistic/report" },
			{ label: "Lịch sử đối soát", key: "statistic/history" },
			{ label: "Phân phối doanh thu", key: "statistic/distribute" },
		],
	},
	{
		label: <MenuItem title="Cài đặt" icon={<SettingIcon />} />,
		key: "setting",
		children: [
			{ label: "Phân quyền người dùng", key: "setting/role" },
			{ label: "Cấu hình", key: "theme" },
			{ label: "Quản lý hợp đồng", key: "setting/contract" },
			{ label: "Thông tin tác phẩm", key: "setting/gerne" },
			{ label: "Chu kỳ đối soát", key: "setting/system" },
		],
	},
	{
		label: <MenuItem title="Hỗ trợ" icon={<SupportIcon />} />,
		key: "7",
		children: [
			{ label: "Hướng dẫn sử dụng", key: "support/how-to" },
			{ label: "Tải app", key: "support/download" },
			{ label: "Feedback", key: "support/feedback" },
		],
	},
];
