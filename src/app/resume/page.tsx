"use client";

import { useEffect, useState } from "react";
import ResumeControlPanel from "@/components/resume/ResumeControlPanel";
import Image from "next/image";
import ResumeLegacyDownloadPanel from "@/components/resume/ResumeLegacyDownloadPanel";

export default function Resume() {
	const [viewMode, setViewMode] = useState("legacy");
	const [showArrow, setShowArrow] = useState(true);
	const [arrowAnimation, setArrowAnimation] = useState(true);

	const notifyViewChange = (mode: string = "compact") => {
		setViewMode(mode);
		setShowArrow(mode == "legacy");
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 30) {
				setShowArrow(false);
			} else {
				setShowArrow(true);
			}
		};

		window.addEventListener("scroll", handleScroll);

		setTimeout(() => {
			setArrowAnimation(false);
		}, 10000);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<main className="flex flex-col w-full h-no-navbar relative">
			{showArrow && (
				<div
					className={
						"hidden lg:block absolute w-[21rem] h-[20rem] top-5 right-[11rem] z-10 " +
						(arrowAnimation
							? "animate-hue-rotate"
							: "animate-none") +
						(viewMode != "legacy" ? " hidden" : " block")
					}
				>
					<Image
						src="/assets/resume/curvy-arrow.png"
						alt="Arrow pointing to homepage"
						fill={true}
						objectFit="contain"
						quality={100}
					/>
				</div>
			)}
			{viewMode == "legacy" && <ResumeLegacyDownloadPanel />}
			<div className="h-full w-full">
				{viewMode == "legacy" && (
					<div className="h-full w-full p-5 flex flex-col items-center gap-8 mt-6">
						<img
							src="/assets/resume/PhamCongTuan - Fullstack-1.png"
							alt="Resume page 1"
							className="w-full lg:w-[70vw] lg:min-w-[60rem] h-auto rounded-md border border-[#5b18c1] shadow-resume mx-auto"
							style={{ transform: "translate3d(0, 0, 0)" }}
						/>

						<img
							src="/assets/resume/PhamCongTuan - Fullstack-2.png"
							alt="Resume page 2"
							className="w-full lg:w-[70vw] lg:min-w-[60rem] h-auto rounded-md border border-[#5b18c1] shadow-resume mx-auto"
							style={{ transform: "translate3d(0, 0, 0)" }}
						/>
						<div className="block w-full h-10 invisible">
							placeholder
						</div>
					</div>
				)}
				{viewMode == "dual" && (
					<div className="h-full w-full p-3 flex items-center justify-center gap-5">
						<img
							src="/assets/resume/PhamCongTuan - Fullstack-1.png"
							alt="Resume page 1"
							className="h-full rounded-md border border-[#5b18c1] shadow-resume"
							style={{ transform: "translate3d(0, 0, 0)" }}
						/>
						<img
							src="/assets/resume/PhamCongTuan - Fullstack-2.png"
							alt="Resume page 2"
							className="h-full rounded-md border border-[#5b18c1] shadow-resume"
							style={{ transform: "translate3d(0, 0, 0)" }}
						/>
					</div>
				)}
				{viewMode == "compact" && (
					<object
						data="/assets/resume/PhamCongTuan - Fullstack.pdf"
						type="application/pdf"
						className={"h-full w-full"}
					>
						<embed
							src="/assets/resume/PhamCongTuan - Fullstack.pdf"
							type="application/pdf"
						/>
					</object>
				)}
			</div>
			<div className="fixed bottom-3 pt-8 w-full flex justify-center opacity-40 animate-pulse hover:animate-none -mb-10 hover:opacity-100 hover:mb-0 transition-all duration-300">
				<ResumeControlPanel notifyViewChange={notifyViewChange} />
			</div>
		</main>
	);
}
