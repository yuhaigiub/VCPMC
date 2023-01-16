import Icon from "@ant-design/icons";
import { width, height, color } from "./constants";

const StatisticSVG = () => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g>
				<path
					d="M11.286 5H8.14318C7.30965 5 6.51027 5.33112 5.92087 5.92051C5.33148 6.5099 5.00037 7.30929 5.00037 8.14281V26.9997C5.00037 27.8332 5.33148 28.6326 5.92087 29.222C6.51027 29.8114 7.30965 30.1425 8.14318 30.1425H23.8572C24.6908 30.1425 25.4901 29.8114 26.0795 29.222C26.6689 28.6326 27 27.8332 27 26.9997V8.14281C27 7.30929 26.6689 6.5099 26.0795 5.92051C25.4901 5.33112 24.6908 5 23.8572 5H20.7144"
					stroke={color}
					strokeWidth="2.1"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.5716 1.85693H14.4288C12.6931 1.85693 11.286 3.26402 11.286 4.99974C11.286 6.73547 12.6931 8.14256 14.4288 8.14256H17.5716C19.3074 8.14256 20.7144 6.73547 20.7144 4.99974C20.7144 3.26402 19.3074 1.85693 17.5716 1.85693Z"
					stroke={color}
					strokeWidth="2.1"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M19.1432 14.4282H15.2147C14.5895 14.4282 13.99 14.6766 13.5479 15.1186C13.1059 15.5606 12.8575 16.1602 12.8575 16.7853C12.8575 17.4105 13.1059 18.01 13.5479 18.4521C13.99 18.8941 14.5895 19.1424 15.2147 19.1424H16.7861C17.4112 19.1424 18.0107 19.3908 18.4528 19.8328C18.8948 20.2749 19.1432 20.8744 19.1432 21.4995C19.1432 22.1247 18.8948 22.7242 18.4528 23.1663C18.0107 23.6083 17.4112 23.8567 16.7861 23.8567H12.8575"
					stroke={color}
					strokeWidth="2.1"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16 12.8569V14.4283M16 23.8568V25.4282V23.8568Z"
					stroke={color}
					strokeWidth="2.1"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

const StatisticIcon = () => {
	return <Icon component={StatisticSVG} />;
};

export default StatisticIcon;
