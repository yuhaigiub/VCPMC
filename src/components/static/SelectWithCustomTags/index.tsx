import React from "react";

import { Select, Tag } from "antd";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";

const SelectWithCustomTags: React.FC<Props> = ({ value, setValue, options = defaultOptions }) => {
	return (
		<Select
			mode="multiple"
			tagRender={tagRender}
			value={value}
			onChange={(v) => {
				setValue(v);
			}}
			style={{ width: "100%", height: "2rem", color: "white" }}
			options={options}
		/>
	);
};

export default SelectWithCustomTags;

const defaultOptions = [
	{ label: "gold", value: "gold" },
	{ label: "lime", value: "lime" },
	{ label: "green", value: "green" },
	{ label: "cyan", value: "cyan" },
];
const tagRender = (props: CustomTagProps) => {
	const { label, value, closable, onClose } = props;
	const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
		event.preventDefault();
		event.stopPropagation();
	};
	return (
		<Tag
			color={value}
			onMouseDown={onPreventMouseDown}
			closable={closable}
			onClose={onClose}
			style={{ marginRight: 3 }}>
			{label}
		</Tag>
	);
};

interface Props {
	value: any[];
	setValue: (value: any) => void;
	options?: {
		value: string;
		label: string;
	}[];
}
