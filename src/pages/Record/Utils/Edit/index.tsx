import React, { useState, useEffect } from "react";
import style from "./RecordEditPage.module.css";

import LayoutPage from "../../../../components/Layouts/Page/LayoutPage";
import TwoButtonsWrapper from "../../../../components/static/TwoButtonsWrapper";
import { Input, Form } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { FormWrapInput } from "../../../../components/custom/FormWrap";
import SelectWithCustomTags from "../../../../components/static/SelectWithCustomTags";
import { getAllGernesQuery } from "../../../../slices/gernes/selectors";
import { getRecord, updateRecord } from "../../../../slices/records/reducers";
import { getContract } from "../../../../slices/contracts/reducers";
import { getUser } from "../../../../slices/users/reducers";

const RecordEditPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [form] = Form.useForm();
	const { key } = useParams();
	const [data, setData] = useState<any>({
		recordName: "",
		uploader: "",
		contractId: "",
		dateExpired: "",
		userId: "",
	});

	const gernesList = useAppSelector(getAllGernesQuery);
	const [gernes, setGernes] = useState<any>([]);

	useEffect(() => {
		dispatch(getRecord(key as string))
			.unwrap()
			.then((record) => {
				if (record !== null) {
					dispatch(getContract(record.contractId))
						.unwrap()
						.then((contract) => {
							if (contract !== null) {
								dispatch(getUser(contract.userId))
									.unwrap()
									.then((user) => {
										if (user !== null) {
											form.setFieldsValue({
												recordName: record.recordName,
												singerName: record.singerName,
												time: record.time,
											});
											setGernes(record.gernes);
											setData({
												recordName: record.recordName,
												uploader: user.fullname,
												contractId: contract.key,
												dateExpired: contract.dateExpired.toDateString(),
												userId: user.key,
											});
										} else {
											console.log(`can't find user`);
										}
									});
							} else {
								console.log(`can't find contract`);
							}
						});
				} else {
					console.log(`can't find record`);
				}
			});
	}, []);

	return (
		<LayoutPage
			heading={`B???n ghi - ${"Name"}`}
			breadcrumbData={[
				{ name: "B???n ghi", path: "/record" },
				{ name: "C???p nh???t th??ng tin", path: "/record/edit" },
			]}
			quickButtonData={[{ description: "X??a b???n ghi", onClick: () => {} }]}>
			<Form
				form={form}
				onFinish={(values) => {
					console.log(values);
					dispatch(updateRecord({ id: key as string, data: values })).then((res) => {
						navigate(-1);
					});
				}}
				style={{ width: "100%", height: "100%" }}>
				<div className={style.container}>
					<div className={style.first}>
						<div className={style.title}>Th??ng tin b???n ghi</div>
						<div className={style.image}></div>
						<div>{data.recordName}</div>
						<div
							style={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								gap: "0.5em",
							}}>
							<div className={style.fullWidthContainer}>
								<div className={style.label}>Ng?????i t???i l??n:</div>
								<div>{data.uploader}</div>
							</div>
						</div>
					</div>
					<div className={style.second}>
						<div className={style.title}>Th??ng tin ???y quy???n</div>
						<div
							style={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								gap: "0.5em",
							}}>
							<div className={style.fullWidthContainer}>
								<div className={style.label}>S??? h???p ?????ng:</div>
								<div>{data.contractId}</div>
							</div>
							<div className={style.fullWidthContainer}>
								<div className={style.label}>Ng??y h???t h???n:</div>
								<div>{data.dateExpired}</div>
							</div>
						</div>
					</div>
					<div className={style.third}>
						<div className={style.title}>Ch???nh s???a th??ng tin</div>
						<div className={style.inputContainer}>
							<div className={style.label}>T??n b???n ghi:</div>
							<FormWrapInput name="recordName" />
						</div>
						<div className={style.inputContainer}>
							<div className={style.label}>T??c gi???:</div>
							<FormWrapInput name="singerName" />
						</div>
						<div className={style.inputContainer}>
							<div className={style.label}>Th??? lo???i:</div>
							<SelectWithCustomTags
								value={gernes}
								setValue={setGernes}
								options={gernesList.map((gerne) => {
									return { label: gerne.name, value: gerne.key };
								})}
							/>
						</div>
						<div className={style.inputContainer}>
							<div className={style.label}>Th???i l?????ng:</div>
							<FormWrapInput name="time" />
						</div>
					</div>
				</div>
				<TwoButtonsWrapper />
			</Form>
		</LayoutPage>
	);
};

export default RecordEditPage;
