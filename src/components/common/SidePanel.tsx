"use client";

import Link from "next/link";
import Image from "next/image";
import "@/styles/component.css";
import Arrow from "../../../public/assets/side_panel/Arrow";
import Gear from "../../../public/assets/side_panel/Gear";
import ScrollTopIcon from "../../../public/assets/side_panel/ScrollTopIcon";
import { useState } from "react";
import { scrollTop } from "@/helper/useWindowScroll";

export default function SidePanel() {
	const [showArrow, setShowArrow] = useState(true);

	return (
		<div
			className="side-panel flex flex-col gap-5 justify-center items-center w-14 min-h-fit max-h-[70%] fixed top-1/2 right-0 -mr-11 hover:mr-[-2px] opacity-100 trasition-all duration-300 p-1 z-50 bg-[#ededed8d] backdrop-blur-xs"
			onMouseEnter={() => setShowArrow(false)}
			onMouseLeave={() => setShowArrow(true)}
		>
			<div className="h-24 w-12 mx-auto relative flex flex-col gap-3 items-center">
				<Arrow
					className={
						"absolute top-1/3 -left-3/4 transition-all duration-300 animate-jiggle-x" +
						(showArrow
							? " opacity-70 scale-100"
							: " opacity-0 scale-[0.01]")
					}
				/>
				<button
					onClick={() => scrollTop()}
					className="p-1"
				>
					<ScrollTopIcon className="scale-0.9" />
				</button>
				<Link
					href="https://tompham-portfolio.vercel.app"
					target="_self"
					className="relative w-full -translate-x-0.5"
				>
					<Gear className="animate-spin-slow-reverse absolute top-[9px] left-[35%] opacity-30" />
					<p className="font-bold tracking-tighter text-2xl text-gradient text-center absolute left-1/4">
						V1
					</p>
				</Link>
			</div>
		</div>
	);
}
