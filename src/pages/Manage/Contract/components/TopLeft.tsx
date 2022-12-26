import React from "react";

import { Input, Select, DatePicker } from "antd";

import TextField from "../../../../components/custom/TextField";

const TopLeft: React.FC<{ type: string }> = ({ type }) => {
	const rendered = () => {
		switch (type) {
			case "authorizeDetail":
				return (
					<>
						<TextField title="Số hợp đồng" />
						<TextField title="Tên hợp đồng" />
						<TextField title="Ngày hiệu lực" />
						<TextField title="Ngày hết hạn" />
						<TextField title="Tình trạng" />
					</>
				);
			case "authorizeAdd":
				return (
					<>
						<TextField title="Số hợp đồng" value={<Input />} />
						<TextField title="Tên hợp đồng" value={<Input />} />
						<TextField title="Ngày hiệu lực" value={<DatePicker />} />
						<TextField title="Ngày hết hạn" value={<DatePicker />} />
					</>
				);
			case "authorizeEdit":
				return (
					<>
						<TextField title="Số hợp đồng" value={<Input />} />
						<TextField title="Tên hợp đồng" value={<Input />} />
						<TextField title="Ngày hiệu lực" value={<DatePicker />} />
						<TextField title="Ngày hết hạn" value={<DatePicker />} />
						<TextField title="Tình trạng" value={<Select style={{ width: "100%" }} />} />
					</>
				);
		}
	};

	return <>{rendered()}</>;
};

export default TopLeft;
