import React, { useState } from "react";
import style from "./ContractAuthorizeAddPage.module.css";

import { Input, DatePicker, Select, Radio, Form } from "antd";

import TextField from "../../../../../../components/custom/TextField";
import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TwoButtonsWrapper from "../../../../../../components/static/TwoButtonsWrapper";

const ContractAuthorizeAddPage = () => {
	const [form] = Form.useForm();
	const [isIndividual, setIsIndividual] = useState<boolean>(true);

	const typeRadio = (
		<Form.Item name="type" noStyle>
			<Radio.Group
				onChange={(e) => {
					setIsIndividual(e.target.value);
				}}>
				<Radio value={true}>Cá nhân</Radio>
				<Radio value={false}>Tổ chức</Radio>
			</Radio.Group>
		</Form.Item>
	);

	const genderRadio = (
		<Form.Item name="gender" noStyle>
			<Radio.Group>
				<Radio value="male">Nam</Radio>
				<Radio value="female">Nữ</Radio>
			</Radio.Group>
		</Form.Item>
	);

	return (
		<LayoutPage>
			<Form
				form={form}
				onFinish={(values) => {
					console.log(values);
				}}
				initialValues={{ type: true, gender: "male" }}
				style={{ width: "100%", height: "100%" }}>
				<div className={style.container}>
					<div className={style.subContainer}>
						<TopLeft />
					</div>
					<div className={style.subContainer}>
						<TextField title="Đính kèm tệp" />
					</div>
					<div className={style.subContainer}>
						<div className={style.subContainerTitle}>Mức nhuận bút</div>
						<TextField title="Quyền tác giả" />
						<TextField title="Quyền liên quan" />
						<TextField title="Quyền của người biểu diễn" boldTitle={false} />
						<TextField title="Quyền của nhà sản xuất (Bản ghi/video)" boldTitle={false} />
					</div>
					<div className={style.subContainerTitle}>Thông tin Pháp nhân ủy quyền</div>
					<div className={style.subContainer}>
						<BottomLeft
							typeRadio={typeRadio}
							genderRadio={genderRadio}
							isIndividual={isIndividual}
						/>
					</div>
					<div className={style.subContainer}>
						<BottomMid isIndividual={isIndividual} genderRadio={genderRadio} />
					</div>
					<div className={style.subContainer}>
						<BottomRight isIndividual={isIndividual} />
					</div>
				</div>
				<TwoButtonsWrapper onPrimaryClick={() => {}} />
			</Form>
		</LayoutPage>
	);
};

export default ContractAuthorizeAddPage;

const TopLeft = () => {
	return (
		<>
			<TextField title="Số hợp đồng" value={<Input />} />
			<TextField title="Tên hợp đồng" value={<Input />} />
			<TextField title="Ngày hiệu lực" value={<DatePicker style={{ width: "100%" }} />} />
			<TextField title="Ngày hết hạn" value={<DatePicker style={{ width: "100%" }} />} />
		</>
	);
};

const BottomLeft: React.FC<{
	typeRadio: React.ReactNode;
	genderRadio: React.ReactNode;
	isIndividual: boolean;
}> = ({ typeRadio, genderRadio, isIndividual }) => {
	return (
		<>
			<TextField title="Pháp nhân ủy quyền" value={typeRadio} />
			{isIndividual ? (
				<>
					<TextField title="Tên người ủy quyền" value={<Input />} />
					<TextField title="Ngày sinh" value={<DatePicker style={{ width: "100%" }} />} />
					<TextField title="Giới tính" value={genderRadio} />
					<TextField
						title="Quốc tịch"
						value={
							<Select
								style={{ width: "100%" }}
								options={[
									{ value: "vn", label: "vn" },
									{ value: "cn", label: "cn" },
								]}
							/>
						}
					/>
					<TextField title="Số điện thoại" value={<Input />} />
				</>
			) : (
				<>
					<TextField title="Tên tổ chức" value={<Input />} />
					<TextField title="Mã số thuế" value={<Input />} />
					<TextField title="Số tài khoản" value={<Input />} />
					<TextField title="Ngân hàng" value={<Input />} />
					<TextField
						title="Địa chỉ"
						value={<Input.TextArea autoSize={{ minRows: 3, maxRows: 3 }} />}
					/>
				</>
			)}
		</>
	);
};

const BottomMid: React.FC<{ isIndividual: boolean; genderRadio: React.ReactNode }> = ({
	isIndividual,
	genderRadio,
}) => {
	return isIndividual ? (
		<>
			<TextField title="Số CMND/CCCD" value={<Input />} />
			<TextField title="Ngày cấp" value={<DatePicker style={{ width: "100%" }} />} />
			<TextField title="Nơi cấp" value={<Input />} />
			<TextField title="Mã số thuế" value={<Input />} />
			<TextField
				title="Nơi cư trú"
				value={<Input.TextArea autoSize={{ minRows: 3, maxRows: 3 }} />}
			/>
		</>
	) : (
		<>
			<TextField title="Người đại diện" value={<Input />} />
			<TextField title="Chức vụ" value={<Input />} />
			<TextField title="Ngày sinh" value={<DatePicker style={{ width: "100%" }} />} />
			<TextField title="Giới tính" value={genderRadio} />
			<TextField title="Số CMND/CCCD" value={<Input />} />
			<TextField title="Ngày cấp" value={<DatePicker style={{ width: "100%" }} />} />
			<TextField title="Nơi cấp" value={<Input />} />
			<TextField title="Quốc tịch" value={<Select style={{ width: "100%" }} />} />
		</>
	);
};

const BottomRight: React.FC<{ isIndividual: boolean }> = ({ isIndividual }) => {
	return isIndividual ? (
		<>
			<TextField title="Email" value={<Input />} />
			<TextField title="Tên đăng nhập" value={<Input />} />
			<TextField title="Mật khẩu" value={<Input />} />
			<TextField title="Số tài khoản" value={<Input />} />
			<TextField title="Ngân hàng" value={<Input />} />
		</>
	) : (
		<>
			<TextField
				title="Nơi cư trú"
				value={<Input.TextArea autoSize={{ minRows: 3, maxRows: 3 }} />}
			/>
			<TextField title="Số điện thoại" value={<Input />} />
			<TextField title="Email" value={<Input />} />
			<TextField title="Tên đăng nhập" value={<Input />} />
			<TextField title="Mật khẩu" value={<Input />} />
		</>
	);
};
