"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const NavigationBar = () => {
	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.querySelector("nav");
			if (window.scrollY > 100) {
				navbar?.classList.add("translate-y--16");
			} else {
				navbar?.classList.remove("translate-y--16");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className="w-full flex justify-between items-center bg-neutral-50 fixed top-0 left-0 transition-all duration-300 nav max-h-14 z-50"
			style={{ boxShadow: "3px 3px 3px rgba(63, 63, 117, 0.2)" }}
		>
			<Link
				href="/"
				className="font-logo text-neutral-500 text-4xl px-4"
				style={{ textShadow: "1px 1px rgb(161, 161, 161)" }}
			>
				Tom Pham&apos;s Portfolio
			</Link>
			<div className="flex items-center justify-right h-full">
				<Link
					className="font-menu flex items-center justify-center text-4xl bg-[#9adcff] py-2 w-36 hover:w-40 transition-all duration-300 ease-in-out"
					href="/"
				>
					Home
				</Link>
				<Link
					className="font-menu flex items-center justify-center text-4xl bg-[#fff89a] py-2 w-36 hover:w-40 transition-all duration-300 ease-in-out"
					href="/story"
				>
					Story
				</Link>
				<Link
					className="font-menu flex items-center justify-center text-4xl bg-[#ff9a9a] py-2 w-36 hover:w-40 transition-all duration-300 ease-in-out"
					href="/projects"
				>
					Projects
				</Link>
				<Link
					className="font-menu flex items-center justify-center text-4xl bg-[#d49fff] py-2 w-36 hover:w-40 transition-all duration-300 ease-in-out"
					href="/resume"
				>
					Resumé
				</Link>
			</div>
		</div>
	);
};

export default NavigationBar;
