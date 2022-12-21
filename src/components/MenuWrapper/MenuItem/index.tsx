import React from "react";

const MenuItem: React.FC<Props> = ({ title }) => {
	return <div>{title}</div>;
};

export default MenuItem;

interface Props {
	title: string;
}
