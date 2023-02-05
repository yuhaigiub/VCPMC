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
import SelectWithCustomTags from "../../../../../../components/static/SelectWithCustomTags";
import { ContractTable, RecordTable } from "../../../../../../types/data";
import { useAppDispatch, useAppSelector } from "../../../../../../app/store";
import { addContract } from "../../../../../../slices/contracts/reducers";
import { addRecord } from "../../../../../../slices/records/reducers";
import { useNavigate } from "react-router-dom";
import { getAllGernesQuery } from "../../../../../../slices/gernes/selectors";
import { getUserByUsername } from "../../../../../../slices/users/reducers";

const ContractAuthorizeAddPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [form] = Form.useForm();

	const gernesList = useAppSelector(getAllGernesQuery);
	const [gernes, setGernes] = useState<any>([]);

	return (
		<LayoutPage
			heading="Thêm hợp đồng mới"
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Quản lý hợp đồng", path: "/manage/contract" },
				{ name: "Thêm hợp đồng", path: "/manage/contract/authorize/add" },
			]}>
			<Form
				form={form}
				onFinish={(values) => {
					dispatch(getUserByUsername(values.username))
						.unwrap()
						.then((user) => {
							if (user !== null && user.password === values.password) {
								const contractData: ContractTable = {
									key: "",
									contractName: values.contractName,
									dateCreated: new Date(),
									dateExpired: values.dateExpired.toDate(),
									userId: user.key,
								};
								dispatch(addContract(contractData))
									.unwrap()
									.then((contract) => {
										// create record after create contract
										const recordData: RecordTable = {
											key: "",
											gernes,
											time: parseInt(values.time),
											recordName: values.recordName,
											singerName: values.singerName,
											contractId: contract.key,
										};
										dispatch(addRecord(recordData)).then((record) => {
											navigate(-1); // go back to table
										});
									});
							} else {
								console.log("invalid user");
							}
						});
				}}
				initialValues={{ type: true, gender: "male" }}
				style={{ width: "100%", height: "100%" }}>
				<div className={style.container}>
					<div className={style.subContainer}>
						<TextField title="Tên hợp đồng" value={<FormWrapInput name="contractName" />} />
						<TextField title="Ngày hết hạn" value={<FormWrapDatePicker name="dateExpired" />} />
						<TextField title="Tên đăng nhập" value={<FormWrapInput name="username" />} />
						<TextField title="Mật khẩu" value={<FormWrapInput name="password" />} />
					</div>
					<div className={style.subContainer}>Thêm bản ghi bài hát: TODO</div>
					<div className={style.subContainerTitle}>Thông tin bài hát</div>
					<div className={style.subContainer}>
						<TextField title="Tên bài hát" value={<FormWrapInput name="recordName" />} />
						<TextField
							title="Thể loại"
							value={
								<SelectWithCustomTags
									value={gernes}
									setValue={setGernes}
									options={gernesList.map((gerne) => {
										return { label: gerne.name, value: gerne.key };
									})}
								/>
							}
						/>
						<TextField title="Tên ca sĩ" value={<FormWrapInput name="singerName" />} />
						<TextField title="Thời lượng" value={<FormWrapInput name="time" />} />
					</div>
				</div>
				<TwoButtonsWrapper />
			</Form>
		</LayoutPage>
	);
};

export default ContractAuthorizeAddPage;
