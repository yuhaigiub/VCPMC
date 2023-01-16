import Icon from "@ant-design/icons";
import { width, height, color } from "./constants";

const SupportSVG = () => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 17C0 16.3333 0 15.6667 0 15C0.0166667 14.9083 0.0416667 14.8167 0.05 14.725C0.158333 13.9917 0.225 13.2583 0.375 12.5333C1.66667 6.33333 6.95833 1.26667 13.2083 0.25C13.8 0.15 14.4 0.0833333 15 0C15.6667 0 16.3333 0 17 0C17.0833 0.0166667 17.1583 0.0416667 17.2417 0.05C18.2417 0.225 19.2833 0.283333 20.2417 0.583333C26.5667 2.53333 30.4167 6.75833 31.75 13.2417C31.8667 13.8167 31.9167 14.4167 32 15C32 15.6667 32 16.3333 32 17C31.9833 17.0833 31.9583 17.1583 31.95 17.2417C31.6667 20.75 30.3833 23.8417 28.075 26.4917C25.5917 29.3417 22.4833 31.1 18.7583 31.7583C18.175 31.8583 17.5917 31.925 17 32C16.3333 32 15.6667 32 15 32C14.9333 31.9833 14.8583 31.9583 14.7917 31.95C12.0333 31.7417 9.49167 30.9 7.2 29.3583C3.41667 26.8083 1.08333 23.2833 0.25 18.7917C0.141667 18.2 0.0833333 17.6 0 17ZM2.24167 15.975C2.21667 23.5583 8.375 29.7417 15.9833 29.7583C23.5583 29.7833 29.7167 23.65 29.7583 16.0417C29.8 8.46667 23.65 2.275 16.0333 2.24167C8.45 2.2 2.26667 8.35833 2.24167 15.975Z"
				fill={color}
			/>
			<path
				d="M15.6502 7.9668C16.6586 7.97513 17.4919 8.10846 18.2836 8.48346C20.1752 9.38346 20.8169 11.3251 19.8252 13.1668C19.3919 13.9835 18.7586 14.6251 18.0502 15.2001C17.8752 15.3418 17.6919 15.4918 17.5252 15.6418C17.0336 16.0918 16.7752 16.6585 16.7586 17.3251C16.7502 17.5251 16.7586 17.7168 16.7502 17.9168C16.7336 18.3251 16.5669 18.5501 16.1836 18.6835C16.1086 18.7085 16.0252 18.7335 15.9419 18.7418C14.7836 18.9251 14.3836 18.5918 14.3502 17.4251C14.3169 16.0335 14.8086 14.8835 15.9252 14.0251C16.2669 13.7668 16.6252 13.5168 16.9086 13.2085C17.1752 12.9085 17.4336 12.5501 17.5586 12.1751C17.8002 11.4751 17.4586 10.8418 16.7752 10.5501C15.6502 10.0668 14.4919 10.4001 13.7836 11.4001C13.2919 12.0918 12.5169 12.1751 11.9586 11.5835C11.6086 11.2085 11.5836 10.7585 11.7252 10.3001C12.0252 9.33346 12.7419 8.75013 13.6336 8.3668C14.3252 8.07513 15.0502 7.9668 15.6502 7.9668Z"
				fill={color}
			/>
			<path
				d="M17.1415 21.8584C17.1499 22.7501 16.4082 23.5001 15.5248 23.4918C14.6665 23.4834 13.9415 22.7668 13.9332 21.8917C13.9248 20.9917 14.6248 20.2584 15.4998 20.2501C16.3999 20.2417 17.1332 20.9584 17.1415 21.8584Z"
				fill={color}
			/>
			<defs>
				<clipPath id="clip0_10851_8491">
					<rect width={width + 4} height={height + 4} fill={color} />
				</clipPath>
			</defs>
		</svg>
	);
};

const SupportIcon = () => {
	return <Icon component={SupportSVG} />;
};

export default SupportIcon;
