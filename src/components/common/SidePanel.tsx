"use client";

import Link from "next/link";
import Image from "next/image";
import "@/styles/component.css";
import Arrow from "../../../public/assets/side_panel/Arrow";
import Gear from "../../../public/assets/side_panel/Gear";
import { useState } from "react";

export default function SidePanel() {
	const [showArrow, setShowArrow] = useState(true);

	return (
		<div
			className="side-panel flex flex-col gap-5 justify-center items-center w-14 min-h-fit max-h-[70%] fixed top-1/2 right-0 -mr-12 hover:mr-[-2px] opacity-100 trasition-all duration-300 p-1 z-50 bg-[#ededed8d] backdrop-blur-xs"
			onMouseEnter={() => setShowArrow(false)}
			onMouseLeave={() => setShowArrow(true)}
		>
			<Arrow
				className={
					"absolute top-1/2 right-[95%] transition-all duration-300 animate-jiggle-x" +
					(showArrow
						? " opacity-70 scale-100"
						: " opacity-0 scale-[0.01]")
				}
			/>
			<div className="h-12 w-12 mx-auto">
				<Link
					href="https://tompham-portfolio.vercel.app"
					target="_self"
					className="relative px-2 py-3"
				>
					<Gear className="animate-spin-slow-reverse absolute top-[65%] left-[88%] opacity-30" />
					<p className="font-bold tracking-tighter text-2xl text-gradient absolute top-[45%] left-[55%]">
						V1
					</p>
				</Link>
			</div>
		</div>
	);
}
