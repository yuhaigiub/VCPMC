import { Form, Input, DatePicker, Select } from "antd";

export const FormWrapInput: React.FC<{ name: string }> = ({ name }) => {
	return (
		<Form.Item name={name} noStyle>
			<Input />
		</Form.Item>
	);
};

export const FormWrapDatePicker: React.FC<{ name: string }> = ({ name }) => {
	return (
		<Form.Item name={name} noStyle>
			<DatePicker style={{ width: "100%" }} />
		</Form.Item>
	);
};

export const FormWrapTextArea: React.FC<{ name: string; minRows?: number; maxRows?: number }> = ({
	name,
	minRows = 2,
	maxRows = 2,
}) => {
	return (
		<Form.Item name={name} noStyle>
			<Input.TextArea autoSize={{ minRows, maxRows }} />
		</Form.Item>
	);
};

export const FormWrapSelect: React.FC<{
	name: string;
	options: { label: string; value: string }[];
}> = ({ name, options }) => {
	return (
		<Form.Item name={name} noStyle>
			<Select style={{ width: "100%" }} options={options} />
		</Form.Item>
	);
};
