import React from "react";
import style from "./ContractInfo.module.css";

const ContractInfo = () => {
	return (
		<div className={style.container}>
			<div className={style.subContainer}>
				<TextField title="Số hợp đồng" />
				<TextField title="Tên hợp đồng" />
				<TextField title="Ngày hiệu lực" />
				<TextField title="Ngày hết hạn" />
				<TextField title="Tình trạng" />
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
			<div className={style.subContainer}>
				<div className={style.subContainerTitle}>Thông tin Pháp nhân ủy quyền</div>
				<TextField title="Pháp nhân ủy quyền" />
				<TextField title="Tên người ủy quyền" />
				<TextField title="Ngày sinh" />
				<TextField title="Giới tính" />
				<TextField title="Quốc tịch" />
				<TextField title="Số điện thoại" />
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

const TextField: React.FC<{
	title: string;
	value?: string | number | React.ReactNode;
	boldTitle?: boolean;
}> = ({ title, value = "test", boldTitle = true }) => {
	return (
		<div className={style.field}>
			<div
				className={style.title}
				style={
					boldTitle
						? {}
						: {
								fontWeight: 500,
								color: "rgb(166, 166, 166, 0.8)",
						  }
				}>
				{title}:
			</div>
			<div className={style.value}>{value}</div>
		</div>
	);
};
