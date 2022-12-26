import React, { useState } from "react";
import style from "./ContractAuthorizeEditPage.module.css";

import { Input, DatePicker, Select, Radio } from "antd";

import TextField from "../../../../../../components/custom/TextField";
import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TwoButtonsWrapper from "../../../../../../components/static/TwoButtonsWrapper";
import TopLeft from "../../../components/TopLeft";

const ContractAuthorizeEditPage = () => {
	const [isIndividual, setIsIndividual] = useState<boolean>(true);

	const radioInput = (
		<Radio.Group
			value={isIndividual}
			onChange={(e) => {
				setIsIndividual(e.target.value);
			}}>
			<Radio value={true}>Cá nhân</Radio>
			<Radio value={false}>Tổ chức</Radio>
		</Radio.Group>
	);

	const genderInput = (
		<Radio.Group>
			<Radio value="male">Nam</Radio>
			<Radio value="female">Nữ</Radio>
		</Radio.Group>
	);

	return (
		<LayoutPage>
			<div className={style.container}>
				<div className={style.subContainer}>
					<TopLeft type="authorizeEdit" />
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
					<TextField title="Pháp nhân ủy quyền" value={radioInput} />
					{isIndividual ? (
						<>
							<TextField title="Tên người ủy quyền" value={<Input />} />
							<TextField title="Ngày sinh" value={<DatePicker />} />
							<TextField title="Giới tính" value={genderInput} />
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
							<TextField title="Địa chỉ" value={<Input />} />
						</>
					)}
				</div>
				<div className={style.subContainer}>
					<TextField title="Số CMND/CCCD" value={<Input />} />
					<TextField title="Ngày cấp" value={<DatePicker />} />
					<TextField title="Nơi cấp" value={<Input />} />
					<TextField title="Mã số thuế" value={<Input />} />
					<TextField
						title="Nơi cư trú"
						value={<Input.TextArea autoSize={{ minRows: 2, maxRows: 2 }} />}
					/>
				</div>
				<div className={style.subContainer}>
					<TextField title="Email" value={<Input />} />
					<TextField title="Tài khoản đăng nhập" value={<Input />} />
					<TextField title="Mật khẩu" value={<Input />} />
					<TextField title="Số tài khoản" value={<Input />} />
					<TextField title="Ngân hàng" value={<Input />} />
				</div>
			</div>
			<TwoButtonsWrapper />
		</LayoutPage>
	);
};

export default ContractAuthorizeEditPage;
