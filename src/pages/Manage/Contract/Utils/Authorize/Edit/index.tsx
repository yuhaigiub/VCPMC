import React, { useEffect, useState } from "react";
import style from "./ContractAuthorizeEditPage.module.css";
import { Radio, Form } from "antd";
import { FormWrapInput, FormWrapDatePicker } from "../../../../../../components/custom/FormWrap";

import TextField from "../../../../../../components/custom/TextField";
import LayoutPage from "../../../../../../components/Layouts/Page/LayoutPage";
import TwoButtonsWrapper from "../../../../../../components/static/TwoButtonsWrapper";
import SelectWithCustomTags from "../../../../../../components/static/SelectWithCustomTags";
import { ContractTable, UserTable } from "../../../../../../types/data";
import { useAppDispatch, useAppSelector } from "../../../../../../app/store";
import { getContract, updateContract } from "../../../../../../slices/contracts/reducers";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { getRecordfromContractId } from "../../../../../../slices/records/reducers";
import { getAllGernesQuery } from "../../../../../../slices/gernes/selectors";
import { getUser, getUserByUsername, updateUser } from "../../../../../../slices/users/reducers";

const ContractAuthorizeEditPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { key } = useParams();
	const [form] = Form.useForm();

	const gernesList = useAppSelector(getAllGernesQuery);
	const [gernes, setGernes] = useState<any>([]);

	useEffect(() => {
		dispatch(getContract(key as string))
			.unwrap()
			.then((contract) => {
				if (contract !== null) {
					dispatch(getRecordfromContractId(contract.key))
						.unwrap()
						.then((record) => {
							if (record !== null) {
								console.log(contract.userId);
								dispatch(getUser(contract.userId))
									.unwrap()
									.then((user) => {
										if (user !== null) {
											form.setFieldsValue({
												contractName: contract.contractName,
												dateExpired: dayjs(contract.dateExpired),
												recordName: record.recordName,
												singerName: record.singerName,
												username: user.username,
												password: user.password,
												gender: user.gender,
											});
											setGernes(record.gernes);
										} else {
											console.log("no user was found");
											navigate(-1);
										}
									});
							} else {
								console.log("no record was found");
								navigate(-1);
							}
						});
				} else {
					console.log("no contract was found");
					navigate(-1);
				}
			});
	}, []);

	return (
		<LayoutPage
			heading="Chỉnh sửa thông tin hợp đồng"
			breadcrumbData={[
				{ name: "Quản lý", path: "?" },
				{ name: "Quản lý hợp đồng", path: "/manage/contract" },
				{ name: "Chỉnh sửa hợp đồng", path: "/manage/contract/authorize/edit" },
			]}>
			<Form
				form={form}
				onFinish={(values) => {
					dispatch(getUserByUsername(values.username))
						.unwrap()
						.then((user) => {
							if (user !== null && user.password === values.password) {
								const contractData: ContractTable = {
									key: key as string,
									contractName: values.contractName,
									dateCreated: new Date(),
									dateExpired: values.dateExpired.toDate(),
									userId: user.key,
								};
								dispatch(updateContract(contractData))
									.unwrap()
									.then((contract) => {
										navigate(-1);
									});
							} else {
								console.log("invalid user");
							}
						});
				}}
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
					</div>
				</div>
				<TwoButtonsWrapper />
			</Form>
		</LayoutPage>
	);
};

export default ContractAuthorizeEditPage;
