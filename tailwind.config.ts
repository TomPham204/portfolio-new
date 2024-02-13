import type { Config } from "tailwindcss";
import {
	fontFamily,
	colors,
	fontSize,
	animation,
	height,
	minHeight,
	scale,
	boxShadow,
} from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				DancingScript: ["Dancing Script", ...fontFamily.serif],
				PatrickHand: ["Patrick Hand", ...fontFamily.serif],
				AmaticSC: ["Amatic SC", ...fontFamily.serif],
				OreoScript: ["Oreo Script Swash Caps", ...fontFamily.serif],
				NotoSansKR: ["Noto Sans KR", ...fontFamily.sans],
				logo: [
					"Mouse Memoirs",
					"sans-serif",
					...fontFamily.sans,
					"cursive",
				],
				menu: [
					"Mouse Memoirs",
					"sans-serif",
					...fontFamily.sans,
					"cursive",
				],
			},
			fontSize: {
				...fontSize,
				"10xl": "6rem",
				"11xl": "7rem",
				"12xl": "8rem",
				"14xl": "10rem",
				"16xl": "12rem",
			},
			colors: { ...colors },
			height: {
				...height,
				"no-navbar": "calc(100vh - 56px)",
			},
			minHeight: {
				...minHeight,
				"no-navbar": "calc(100vh - 56px)",
			},
			scale: {
				...scale,
				"115": "1.15",
				"120": "1.2",
			},
			animation: {
				...animation,
				"spin-slow": "spin 3s linear infinite",
				"spin-slow-reverse": "spin 3s linear infinite reverse",
				"jiggle-x": "jiggle-x 1s linear infinite",
				"hue-rotate": "hue-rotate 5s linear infinite forwards",
			},
			boxShadow: {
				...boxShadow,
				"resume-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities([
				{
					"@media (min-width: 1920px)": {
						main: {
							maxWidth: "4096px",
							margin: "0 auto",
						},
					},
				},
			]);
		}),
		require("tailwind-scrollbar-hide"),
	],
};
export default config;
