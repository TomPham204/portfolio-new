import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavigationBar from "@/components/layout/Navbar";
import SidePanel from "@/components/common/SidePanel";

const inter = Inter({ subsets: ["latin"] });

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
			<body className="w-full min-h-no-navbar mt-14 overflow-x-hidden">
				<NavigationBar />
				<SidePanel styles="fixed top-1/2 right-0" />
				<section className={inter.className}>{children}</section>
			</body>
		</html>
	);
}
