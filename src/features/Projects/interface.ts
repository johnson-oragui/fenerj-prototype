export interface IProjectMedia {
	images: string[];
	videos: { title: string; url: string; poster?: string }[];
}

export interface IProjectData {
	id: string;
	tabLabel: string;
	title: string;
	category: string;
	location: string;
	year: string;
	client: string;
	description: string;
	stats: { label: string; value: string }[];
	media: IProjectMedia;
}
