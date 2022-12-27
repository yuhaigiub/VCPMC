import React from "react";

import { Input, Select, DatePicker } from "antd";

import TextField from "../../../../components/custom/TextField";

const BottomLeft: React.FC<{ type: string }> = ({ type }) => {
	const rendered = () => {
		switch (type) {
			case "authorizeDetail":
				return (
					<>
						<TextField title="Pháp nhân ủy quyền" />
						<TextField title="Tên người ủy quyền" />
						<TextField title="Ngày sinh" />
						<TextField title="Giới tính" />
						<TextField title="Quốc tịch" />
						<TextField title="Số điện thoại" />
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

export default BottomLeft;
