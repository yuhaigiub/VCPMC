export interface RecordTable {
	key: string;
	contractId: string;
	gernes: string[];
	recordName: string;
	singerName: string;
	time: number;
}

export interface RoleTable {
	key: string;
	description: string;
	name: string;
	numberOfUsers: number;
}

export interface UserTable {
	key: string;
	email: string;
	expireDate: Date;
	fullname: string;
	isActive: boolean;
	password: string;
	roleId: string;
	username: string;
	gender: "male" | "female";
}

export interface GerneTable {
	key: string;
	description: string;
	name: string;
}

export interface DeviceTable {
	key: string;
	MAC: string;
	description: string;
	name: string;
	isActive: boolean;
}

export interface ContractTable {
	key: string;
	contractName: string;
	dateCreated: Date;
	dateExpired: Date;
	userId: string;
}
