export interface RecordTable {
	id: string;
	contractID: string;
	gernes: string[];
	recordName: string;
	singerName: string;
	time: number;
}

export interface RoleTable {
	id: string;
	description: string;
	name: string;
	numberOfUsers: number;
}
