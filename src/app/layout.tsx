import type { Metadata } from "next";
import "@/styles/globals.css";
import NavigationBar from "@/components/layout/Navbar";
import SidePanel from "@/components/common/SidePanel";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
	Inter,
	Mouse_Memoirs,
	Dancing_Script,
	Patrick_Hand,
	Pacifico,
	Handlee,
} from "next/font/google";

export const metadata: Metadata = {
	title: "Tom Pham's Portfolio",
	description: "Tom Pham's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/assets/common/logo.png"
				/>
			</head>
			<body
				className={`w-full min-h-no-navbar mt-14 overflow-x-hidden ${inter.variable} ${dancingScript.variable} ${patrickHand.variable} ${pacifico.variable} ${handlee.variable} ${mouseMemoirs.variable}`}
			>
				<Analytics />
				<SpeedInsights />
				<NavigationBar />
				<SidePanel />
				<section>{children}</section>
			</body>
		</html>
	);
}

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});
const dancingScript = Dancing_Script({
	subsets: ["latin"],
	variable: "--font-dancingScript",
	weight: "500",
	display: "swap",
});
const patrickHand = Patrick_Hand({
	subsets: ["latin"],
	variable: "--font-patrickHand",
	weight: "400",
	display: "swap",
});
const pacifico = Pacifico({
	subsets: ["latin"],
	variable: "--font-pacifico",
	weight: "400",
	display: "swap",
});
const handlee = Handlee({
	subsets: ["latin"],
	variable: "--font-handlee",
	weight: "400",
	display: "swap",
});
const mouseMemoirs = Mouse_Memoirs({
	subsets: ["latin"],
	variable: "--font-mouseMemoirs",
	weight: "400",
	display: "swap",
});
