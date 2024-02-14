"use client";

import { useEffect, useRef, useState } from "react";
import "@/styles/projects.css";
import "@/styles/fireworks.css";
import HTMLFlipBook from "react-pageflip";

interface Project {
	title: string;
	descriptions: string[];
	image?: string;
	link?: string;
	note?: string;
}

export default function Projects() {
	const flipbook = useRef<typeof HTMLFlipBook>(null);
	const [bookLength, setBookLength] = useState(0);

	useEffect(() => {
		setBookLength(webProjects.length + otherProjects.length + 4);
	}, []);

	const checkIfLastPage = (e: any) => {
		if (e >= bookLength + 1) {
			const fireworkWrapper = document.getElementById("firework-wrapper");
			fireworkWrapper?.classList.remove("hidden");
			setTimeout(() => {
				fireworkWrapper?.classList.add("hidden");
			}, 9500);
		}
	};

	return (
		<main className="h-no-navbar w-full p-5">
			<div
				className={"mx-auto h-[80vh] w-[130vh]"}
				id="flip"
			>
				<HTMLFlipBook
					width={550}
					height={733}
					ref={flipbook}
					size="stretch"
					minWidth={315}
					maxWidth={1000}
					minHeight={400}
					maxHeight={1533}
					maxShadowOpacity={0.5}
					showCover={true}
					onFlip={(e) => checkIfLastPage(e.data)}
					className={""}
					startPage={0}
					drawShadow={true}
					flippingTime={800}
					usePortrait={false}
					startZIndex={0}
					autoSize={true}
					mobileScrollSupport={true}
					clickEventForward={false}
					useMouseEvents={true}
					swipeDistance={0}
					showPageCorners={true}
					disableFlipByClick={false}
					style={{}}
				>
					{/* Book cover 1 and 2 */}
					<div className="cover-page p-5 bg-[#e3d0b5] border border-[#998466] text-[#785e3a]">
						<div className="w-full h-full flex justify-center items-center">
							<p className="text-5xl font-bold text-center">
								My projects
							</p>
						</div>
					</div>
					<div className="cover-page p-5 bg-[#e3d0b5] border border-[#998466] text-[#785e3a]">
						<div className="w-full h-full flex justify-center items-center"></div>
					</div>

					{/* Web projects */}
					<div className="inner-page flex flex-col items-center gap-2 border border-[#c2b5a3] p-5 bg-[#fdfaf7]">
						<div className="w-full h-full flex justify-center items-center">
							<p className="text-5xl font-bold text-center">
								Web projects
							</p>
						</div>
					</div>

					{webProjects.map((project: Project, index: number) => (
						<div
							key={index}
							className="inner-page flex flex-col items-center gap-2 border border-[#c2b5a3] p-5 bg-[#fdfaf7]"
						>
							<p className="text-xl font-bold text-center">
								{project.title}
							</p>
							{project.image && (
								<img
									src={project.image}
									alt="Project image"
									className="object-contain max-h-1/3"
								/>
							)}
							<div className="flex flex-col gap-1">
								{project.descriptions.map(
									(line: string, i: number) => (
										<p
											key={i}
											className="text-sm text-[#785e3a] tracking-wider"
										>
											{line}
										</p>
									)
								)}
							</div>
						</div>
					))}

					{/* Other projects */}
					<div className="inner-page flex flex-col items-center gap-2 border border-[#c2b5a3] p-5 bg-[#fdfaf7]">
						<div className="w-full h-full flex justify-center items-center">
							<p className="text-5xl font-bold text-center">
								Other projects
							</p>
						</div>
					</div>

					{otherProjects.map((project: Project, index: number) => (
						<div
							key={index}
							className="inner-page flex flex-col items-center gap-2 border border-[#c2b5a3] p-5 bg-[#fdfaf7]"
						>
							<p className="text-xl font-bold text-center">
								{project.title}
							</p>
							{project.image && (
								<img
									src={project.image}
									alt="Project image"
									className="object-contain max-h-1/3"
								/>
							)}
							<div className="flex flex-col gap-1">
								{project.descriptions.map(
									(line: string, i: number) => (
										<p
											key={i}
											className="text-sm text-[#785e3a] tracking-wider"
										>
											{line}
										</p>
									)
								)}
							</div>
						</div>
					))}

					{/* Filler page if necessary */}
					{/* <div
						className={
							"inner-page flex flex-col items-center gap-2 border border-[#c2b5a3] p-5 bg-[#fdfaf7]"
						}
					>
						<div className="w-full h-full flex justify-center items-center"></div>
					</div> */}

					{/* Book cover 3 and 4 */}
					<div className="cover-page p-5 bg-[#e3d0b5] border border-[#998466] text-[#785e3a]">
						<div className="w-full h-full flex justify-center items-center"></div>
					</div>
					<div className="cover-page p-5 bg-[#e3d0b5] border border-[#998466] text-[#785e3a]">
						<div className="w-full h-full flex justify-center items-center">
							<p className="text-5xl font-bold text-center">
								The end
							</p>
						</div>
					</div>
				</HTMLFlipBook>

				<span
					id="firework-wrapper"
					className="overflow-hidden scrollbar-hide hidden"
				>
					<div className="firework"></div>
					<div className="firework"></div>
					<div className="firework"></div>
					<div className="firework"></div>
					<div className="firework"></div>
					<div className="firework"></div>
				</span>
			</div>
		</main>
	);
}

const webProjects: Project[] = [
	{
		title: "Bartender site (2022)",
		descriptions: [
			"University course project.",
			"HTML, CSS, JavaScript",
			"Responsible for sitemap, layout design, resource design, front-end code",
		],
	},
	{
		title: "GovInsider (2022)",
		descriptions: [
			"A mock newspaper site for Spiritech Camp 2022.",
			"ReactJS (NextJS, Remix), TypeScript, styled-component, React Query, Monorepo, Stitches, Storybook",
		],
	},
	{
		title: "Portfolio V1 (2022)",
		descriptions: [
			"My online portfolio.",
			"Remix, CSS, Vercel",
			"Responsible for everything from design, code, to deployment",
		],
		link: "https://tompham-portfolio.vercel.app/",
	},
	{
		title: "Online Icebreaker (2022)",
		descriptions: [
			"Web app with games for icebreaking for dating support.",
			"NextJS, CSS, Vercel",
			"Responsible for everything from design, code, to deployment",
		],
	},
	{
		title: "MassBit Route (2022-2023)",
		descriptions: [
			"Project of Codelight: admin site + user dashboard to manage Web3's investment and usage of user.",
			"Role: Front-end developer, back-end assistant",
			"Features: Authentication, Google/Github login, Stripe payment, dynamic component, complex log filtering, charts.",
			"Front-end: VueJS, TailwindCSS, PrimeVue,...",
			"Back-end: NestJS, PostgresDB, QuestDB,...",
		],
	},
	{
		title: "HelloTutors (2023-2024)",
		descriptions: [
			"Tutors – learners matching website.",
			"Front-end: VueJS, TypeScript, SCSS + TailwindCSS",
			"Back-end: NestJS, TypeORM, PostgresDB, SocketIO, Stripe",
			"Tools: Docker, WSL, Postman, Photoshop",
			"Responsible for everything from design, code, to deployment",
		],
	},
	{
		title: "Portfolio V2 (2024)",
		descriptions: [
			"An improved version on V1 with better coding, a redesigned user flow, more consistent styling and theme, more implementation of front-end stuff and better choice of tech stack.",
			"NextJS, TailwindCSS, Vercel",
			"Responsible for everything from design, code, to deployment",
		],
	},
];

const otherProjects: Project[] = [
	{
		title: "AIP-BDET",
		descriptions: [
			"Unpublished scientific journal for computational chemistry lab.",
			"Worked with a friend under Assoc. Prof. Huynh Kim Lam's guidance.",
			"Position: Second author.",
		],
	},
	{
		title: "Live Wallpapers",
		descriptions: [
			"Perfect-looped wallpaper videos.",
			"Corel VideoStudio, Adobe Premiere.",
		],
	},
	{
		title: "Osu! Skin: Slim-eX",
		descriptions: [
			"Custom glass skin for the rhythm game.",
			"Photoshop, FL Studio.",
		],
	},
	{
		title: "Yggdrasil Clan Resources",
		descriptions: [
			"Several resources for a 30-member clan (Sheet, OCR script, Discord stickers,...).",
			"Role: Sub-leader.",
		],
	},
	{
		title: "Learning for Everyone",
		descriptions: [
			"A university courses' materials website for the community.",
			"Role: Site uploader, Facebook page moderator.",
		],
	},
];
