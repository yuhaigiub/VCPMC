import React from "react";
import style from "./AddPlaylistPage.module.css";

import { ConfigProvider, Select } from "antd";

import LayoutPage from "../../../components/Layouts/Page/LayoutPage";
import TableWrapper from "../../../components/TableWrapper";
import SelectWithCustomTags from "../../../components/SelectWithCustomTags";

const AddPlaylistPage = () => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Select: {
						colorBgContainer: "#535353",
					},
				},
			}}>
			<LayoutPage>
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
									color: "yellow",
									aspectRatio: "3/1",
									border: "2px solid yellow",
									borderRadius: "8px",
								}}>
								Tải ảnh lên
							</div>
							<hr className={style.dividers} />
						</div>
						<div>
							<div className={`${style.title} ${style.titleTop}`}>Tiêu đề:</div>
							<input className={`${style.input} ${style.textBox}`} />
							<hr className={style.dividers} />
						</div>
						<div>
							<div className={style.title}>Tổng số:</div>
							<div className={style.title}>Tổng thời lượng:</div>
							<hr className={style.dividers} />
						</div>
						<div>
							<div className={`${style.title} ${style.titleTop}`}>Mô tả:</div>
							<textarea className={`${style.textArea} ${style.textBox}`} />
							<hr className={style.dividers} />
						</div>
						<div>
							<div className={`${style.title} ${style.titleTop}`}>Chủ đề:</div>
							<SelectWithCustomTags />
						</div>
					</div>
					<div className={style.containerRight}>
						<TableWrapper maxRow={10} />
					</div>
				</div>
			</LayoutPage>
		</ConfigProvider>
	);
};

export default AddPlaylistPage;
