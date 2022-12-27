import React, { useState } from "react";
import style from "./ContractAuthorizeAddPage.module.css";

import { Radio, Form } from "antd";
import {
	FormWrapInput,
	FormWrapTextArea,
	FormWrapDatePicker,
	FormWrapSelect,
} from "../../../../../../components/custom/FormWrap";

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
				<TwoButtonsWrapper />
			</Form>
		</LayoutPage>
	);
};

export default ContractAuthorizeAddPage;

const TopLeft = () => {
	return (
		<>
			<TextField title="Số hợp đồng" value={<FormWrapInput name="contractNumber" />} />
			<TextField title="Tên hợp đồng" value={<FormWrapInput name="contractName" />} />
			<TextField title="Ngày hiệu lực" value={<FormWrapDatePicker name="contractStartDate" />} />
			<TextField title="Ngày hết hạn" value={<FormWrapDatePicker name="contractEndDate" />} />
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
					<TextField title="Tên người ủy quyền" value={<FormWrapInput name="name" />} />
					<TextField title="Ngày sinh" value={<FormWrapDatePicker name="dateOfBirth" />} />
					<TextField title="Giới tính" value={genderRadio} />
					<TextField title="Quốc tịch" value={<FormWrapSelect name="country" />} />
					<TextField title="Số điện thoại" value={<FormWrapInput name="phone" />} />
				</>
			) : (
				<>
					<TextField title="Tên tổ chức" value={<FormWrapInput name="organizationName" />} />
					<TextField title="Mã số thuế" value={<FormWrapInput name="organizationTaxNumber" />} />
					<TextField title="Số tài khoản" value={<FormWrapInput name="organizationBankNumber" />} />
					<TextField title="Ngân hàng" value={<FormWrapInput name="organizationBankName" />} />
					<TextField title="Địa chỉ" value={<FormWrapTextArea name="organizationAddress" />} />
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
			<TextField title="Số CMND/CCCD" value={<FormWrapInput name="idCardNumber" />} />
			<TextField title="Ngày cấp" value={<FormWrapDatePicker name="idCardStartDate" />} />
			<TextField title="Nơi cấp" value={<FormWrapInput name="idCardAddress" />} />
			<TextField title="Mã số thuế" value={<FormWrapInput name="taxNumber" />} />
			<TextField title="Nơi cư trú" value={<FormWrapTextArea name="address" />} />
		</>
	) : (
		<>
			<TextField title="Người đại diện" value={<FormWrapInput name="name" />} />
			<TextField title="Chức vụ" value={<FormWrapInput name="role" />} />
			<TextField title="Ngày sinh" value={<FormWrapDatePicker name="dateOfBirth" />} />
			<TextField title="Giới tính" value={genderRadio} />
			<TextField title="Số CMND/CCCD" value={<FormWrapInput name="idCardNumber" />} />
			<TextField title="Ngày cấp" value={<FormWrapDatePicker name="idCardStartDate" />} />
			<TextField title="Nơi cấp" value={<FormWrapInput name="idCardAddress" />} />
			<TextField title="Quốc tịch" value={<FormWrapSelect name="country" />} />
		</>
	);
};

const BottomRight: React.FC<{ isIndividual: boolean }> = ({ isIndividual }) => {
	return isIndividual ? (
		<>
			<TextField title="Email" value={<FormWrapInput name="email" />} />
			<TextField title="Tên đăng nhập" value={<FormWrapInput name="username" />} />
			<TextField title="Mật khẩu" value={<FormWrapInput name="password" />} />
			<TextField title="Số tài khoản" value={<FormWrapInput name="bankNumber" />} />
			<TextField title="Ngân hàng" value={<FormWrapInput name="bankName" />} />
		</>
	) : (
		<>
			<TextField title="Nơi cư trú" value={<FormWrapTextArea name="address" />} />
			<TextField title="Số điện thoại" value={<FormWrapInput name="phone" />} />
			<TextField title="Email" value={<FormWrapInput name="email" />} />
			<TextField title="Tên đăng nhập" value={<FormWrapInput name="username" />} />
			<TextField title="Mật khẩu" value={<FormWrapInput name="password" />} />
		</>
	);
};
