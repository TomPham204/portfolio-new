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
				MouseMemoirs: ["var(--font-mouseMemoirs)"],
				DancingScript: ["var(--font-dancingScript)"],
				PatrickHand: ["var(--font-patrickHand)"],
				Handlee: ["var(--font-handlee)"],
				Pacifico: ["var(--font-pacifico)"],
			},
			fontSize: {
				...fontSize,
				"10xl": "6rem",
				"11xl": "7rem",
				"12xl": "8rem",
				"14xl": "10rem",
				"16xl": "12rem",
			},
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
				resume: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
			},
			backdropBlur: {
				xs: "2px",
			},
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "0 2px 4px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
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
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			);
		}),
		require("tailwind-scrollbar-hide"),
	],
};
export default config;
