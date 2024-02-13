"use client";

import { useEffect, useState } from "react";
import ResumeControlPanel from "@/components/resume/ResumeControlPanel";
import Image from "next/image";
import ResumeLegacyDownloadPanel from "@/components/resume/ResumeLegacyDownloadPanel";

export default function Resume() {
	const [useLegacyView, setUseLegacyView] = useState(false);
	const [arrowAnimation, setArrowAnimation] = useState(true);

	const notifyViewChange = (useLegacyView: boolean = false) => {
		setUseLegacyView(useLegacyView);
	};

	useEffect(() => {
		setTimeout(() => {
			setArrowAnimation(false);
		}, 10000);
	}, []);

	return (
		<main className="flex w-full h-no-navbar relative">
			<img
				src="/assets/resume/curvy-arrow.png"
				alt="Arrow pointing to homepage"
				className={
					"absolute w-[21rem] top-2 right-[11rem] z-10 " +
					(arrowAnimation ? "animate-hue-rotate" : "animate-none") +
					(!useLegacyView ? " hidden" : " block")
				}
			/>
			{useLegacyView && <ResumeLegacyDownloadPanel />}
			<div className="h-full w-full">
				{useLegacyView && (
					<div className="h-full w-full p-5 flex flex-col items-center gap-12 mt-6">
						<img
							src="/assets/resume/PhamCongTuan - Frontend-1.png"
							alt="Resume page 1"
							className="w-[70vw] min-w-[60rem] h-auto rounded-md border border-[#5b18c1] shadow-resume-shadow mx-auto"
						/>
						<img
							src="/assets/resume/PhamCongTuan - Frontend-2.png"
							alt="Resume page 2"
							className="w-[70vw] min-w-[60rem] h-auto rounded-md border border-[#5b18c1] shadow-resume-shadow mx-auto"
						/>
					</div>
				)}
				{!useLegacyView && (
					<object
						data="/assets/resume/PhamCongTuan - Frontend.pdf"
						type="application/pdf"
						className={"h-full w-full"}
					>
						<embed
							src="/assets/resume/PhamCongTuan - Frontend.pdf"
							type="application/pdf"
						/>
					</object>
				)}
			</div>
			<div
				className={
					"h-full w-max py-2 px-5" +
					(useLegacyView ? " fixed right-0" : "")
				}
			>
				<ResumeControlPanel notifyViewChange={notifyViewChange} />
			</div>
		</main>
	);
}
