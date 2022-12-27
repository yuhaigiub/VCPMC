import React from "react";
import style from "./ContractInfo.module.css";

import TextField from "../../../../../../../components/custom/TextField";
import TopLeft from "../../../../components/TopLeft";
import BottomLeft from "../../../../components/BottomLeft";

const ContractInfo = () => {
	return (
		<div className={style.container}>
			<div className={style.subContainer}>
				<TopLeft type="authorizeDetail" />
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
				<BottomLeft type="authorizeDetail" />
			</div>
			<div className={style.subContainer}>
				<TextField title="Số CMND/CCCD" />
				<TextField title="Ngày cấp" />
				<TextField title="Nơi cấp" />
				<TextField title="Mã số thuế" />
				<TextField title="Nơi cư trú" />
			</div>
			<div className={style.subContainer}>
				<TextField title="Email" />
				<TextField title="Tài khoản đăng nhập" />
				<TextField title="Mật khẩu" />
				<TextField title="Số tài khoản" />
				<TextField title="Ngân hàng" />
			</div>
		</div>
	);
};

export default ContractInfo;
