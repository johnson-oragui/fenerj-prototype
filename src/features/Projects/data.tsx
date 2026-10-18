import {
	ABUJA_INVERTER_IMAGE_THREE,
	AWKA_ROOFTOP_VIDEO_TWO,
	AWKA_INVERTER_IMAGE_ONE,
	AWKA_INVERTER_IMAGE_TWO,
	AWKA_INVERTER_VIDEO_ONE,
	ABUJA_ROOFTOP_IMAGE_TWO,
	ABUJA_INVERTER_ONE,
	ABUJA_INVERTER_ROOF_VIDEO,
} from "../../../public/path/asset-paths";
import { IProjectData } from "./interface";

export const PROJECTS: IProjectData[] = [
	{
		id: "inverter",
		tabLabel: "Commercial Solar Inverter",
		title: "Inverter and Solar Roof",
		category: "C&I Solar Integration",
		location: "FCT Abuja, Nigeria",
		year: "2026",

		client: "NACA Call Center. NCCH",
		description: "A ballasted 10KVa Inverter and 30KWH.",
		stats: [
			{ label: "Capacity", value: "10KVA" },
			{ label: "Roof Coverage", value: "2,000 m²" },
		],
		media: {
			images: [
				ABUJA_INVERTER_ONE,
				ABUJA_ROOFTOP_IMAGE_TWO,
				ABUJA_INVERTER_IMAGE_THREE,
			],
			videos: [
				{
					title: "Indoor Solar Inverters",
					url: ABUJA_INVERTER_ROOF_VIDEO,
				},
			],
		},
	},
	{
		id: "commercial_rooftop",
		tabLabel: "Commercial Rooftop",
		title: "Solar Roof",
		category: "C&I Solar Integration",
		location: "Awka, Anambra State, Nigeria",
		year: "2026",
		client: "NIPOST USPF Awka",
		description:
			"A ballasted 6KVa rooftop photovoltaic installation engineered specifically for low-load-bearing roofs, integrated with smart net-metering and inverter management.",
		stats: [
			{ label: "Capacity", value: "12 KWH" },
			{ label: "Roof Coverage", value: "2,000 m²" },
			{ label: "Self-Consumption", value: "85%" },
		],
		media: {
			images: [AWKA_INVERTER_IMAGE_ONE, AWKA_INVERTER_IMAGE_TWO],
			videos: [
				{
					title: "Rooftop Ballast Engineering & Installation",
					url: AWKA_ROOFTOP_VIDEO_TWO,
				},
				{
					title: "Indoor Solar Inverters",
					url: AWKA_INVERTER_VIDEO_ONE,
				},
			],
		},
	},
];
