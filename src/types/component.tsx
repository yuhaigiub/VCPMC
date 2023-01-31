export interface BreadcrumbItem {
	name: string;
	path: string;
}

export type BreadcrumbType = BreadcrumbItem[];

export interface QuickButtonItem {
	description: string;
	onClick: () => void;
}

export type QuickButtonType = QuickButtonItem[];
