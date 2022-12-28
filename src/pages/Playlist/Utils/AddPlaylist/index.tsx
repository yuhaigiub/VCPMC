import React from "react";
import style from "./AddPlaylistPage.module.css";

import LayoutPage from "../../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../../components/static/TableWrapper";
import SelectWithCustomTags from "../../../../components/static/SelectWithCustomTags";
import TwoButtonsWrapper from "../../../../components/static/TwoButtonsWrapper";

const AddPlaylistPage = () => {
	return (
		<LayoutPage
			heading="Thêm Playlist"
			breadcrumbData={[
				{ name: "Playlist", path: "?" },
				{ name: "Thêm Playlist mới", path: "/playlist/add" },
			]}
			quickButtonData={[{ description: "Thêm bản ghi", onClick: () => {} }]}>
			<div className={style.container}>
				<div className={style.containerLeft}>
					<div>
						<div className={`${style.title} ${style.titleTop}`}>Ảnh bìa:</div>
						<div
							style={{
								width: "100px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								color: "#ff7506",
								aspectRatio: "3/1",
								border: "2px solid #ff7506",
								borderRadius: "8px",
							}}>
							Tải ảnh lên
						</div>
						<div className={style.dividers} />
					</div>
					<div>
						<div className={`${style.title} ${style.titleTop}`}>Tiêu đề:</div>
						<input className={`${style.input} ${style.textBox}`} />
						<div className={style.dividers} />
					</div>
					<div>
						<div className={style.title}>Tổng số:</div>
						<div className={style.title}>Tổng thời lượng:</div>
						<div className={style.dividers} />
					</div>
					<div>
						<div className={`${style.title} ${style.titleTop}`}>Mô tả:</div>
						<textarea className={`${style.textArea} ${style.textBox}`} />
						<div className={style.dividers} />
					</div>
					<div>
						<div className={`${style.title} ${style.titleTop}`}>Chủ đề:</div>
						<SelectWithCustomTags />
					</div>
				</div>
				<div className={style.containerRight}>
					<TableWrapper maxRow={9} />
					<TwoButtonsWrapper />
				</div>
			</div>
		</LayoutPage>
	);
};

export default AddPlaylistPage;
