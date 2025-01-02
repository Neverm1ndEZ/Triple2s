import type { Config } from "tailwindcss";

const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				gilroy: ["var(--font-gilroy)", "sans-serif"], // fallback as needed
				psygen: ["var(--font-psygen)", "sans-serif"],
				gildDisplay: ["var(--font-gd)", "sans-serif"],
			},
		},
	},
	plugins: [],
} as Config;

export default config;
