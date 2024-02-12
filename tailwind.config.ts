import type { Config } from "tailwindcss";
import { fontFamily, colors } from "tailwindcss/defaultTheme";
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
				"10xl": "6rem",
				"11xl": "7rem",
				"12xl": "8rem",
				"14xl": "10rem",
				"16xl": "12rem",
			},
			colors: { ...colors },
			height: {
				"no-navbar": "calc(100vh - 56px)",
			},
			minHeight: {
				"no-navbar": "calc(100vh - 56px)",
			},
			scale: {
				"115": "1.15",
				"120": "1.2",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities([
				{
					"@media (min-width: 1920px)": {
						main: {
							maxWidth: "1920px",
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
