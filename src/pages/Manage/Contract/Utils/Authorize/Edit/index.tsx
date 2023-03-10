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
import { getContract, overrideContract } from "../../../../../../slices/contracts/reducers";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { getRecordfromContractId } from "../../../../../../slices/records/reducers";
import { getAllGernesQuery } from "../../../../../../slices/gernes/selectors";
import { getUser, getUserByUsername, overrideUser } from "../../../../../../slices/users/reducers";

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
			heading="Ch???nh s???a th??ng tin h???p ?????ng"
			breadcrumbData={[
				{ name: "Qu???n l??", path: "?" },
				{ name: "Qu???n l?? h???p ?????ng", path: "/manage/contract" },
				{ name: "Ch???nh s???a h???p ?????ng", path: "/manage/contract/authorize/edit" },
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
								dispatch(overrideContract(contractData))
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
						<TextField title="T??n h???p ?????ng" value={<FormWrapInput name="contractName" />} />
						<TextField title="Ng??y h???t h???n" value={<FormWrapDatePicker name="dateExpired" />} />
						<TextField title="T??n ????ng nh???p" value={<FormWrapInput name="username" />} />
						<TextField title="M???t kh???u" value={<FormWrapInput name="password" />} />
					</div>
					<div className={style.subContainer}>Th??m b???n ghi b??i h??t: TODO</div>
					<div className={style.subContainerTitle}>Th??ng tin b??i h??t</div>
					<div className={style.subContainer}>
						<TextField title="T??n b??i h??t" value={<FormWrapInput name="recordName" />} />
						<TextField
							title="Th??? lo???i"
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
						<TextField title="T??n ca s??" value={<FormWrapInput name="singerName" />} />
					</div>
				</div>
				<TwoButtonsWrapper />
			</Form>
		</LayoutPage>
	);
};

export default ContractAuthorizeEditPage;
