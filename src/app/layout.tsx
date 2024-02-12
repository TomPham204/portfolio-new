import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavigationBar from "@/components/layout/Navbar";

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
				<section className={inter.className}>{children}</section>
			</body>
		</html>
	);
}
