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
				className="font-MouseMemoirs text-neutral-500 text-4xl px-4 hidden lg:block w-max"
				style={{ textShadow: "1px 1px rgb(161, 161, 161)" }}
			>
				Tom Pham&apos;s Portfolio
			</Link>
			<div className="flex items-center justify-right h-full w-full lg:w-fit">
				<Link
					className="font-MouseMemoirs flex items-center justify-center text-2xl md:text-3xl bg-[#9adcff] py-2 w-1/4 lg:w-36 lg:hover:w-40 transition-all duration-300 ease-in-out"
					href="/"
				>
					Home
				</Link>
				<Link
					className="font-MouseMemoirs flex items-center justify-center text-2xl md:text-3xl bg-[#fff89a] py-2 w-1/4 lg:w-36 lg:hover:w-40 transition-all duration-300 ease-in-out"
					target="_blank"
					href="https://tompham-portfolio.vercel.app/my-story"
				>
					Story (V1)
				</Link>
				<Link
					className="font-MouseMemoirs flex items-center justify-center text-2xl md:text-3xl bg-[#ff9a9a] py-2 w-1/4 lg:w-36 lg:hover:w-40 transition-all duration-300 ease-in-out"
					href="/projects"
				>
					Projects
				</Link>
				<Link
					className="font-MouseMemoirs flex items-center justify-center text-2xl md:text-3xl bg-[#d49fff] py-2 w-1/4 lg:w-36 lg:hover:w-40 transition-all duration-300 ease-in-out"
					href="/resume"
				>
					Resumé
				</Link>
			</div>
		</div>
	);
};

export default NavigationBar;
