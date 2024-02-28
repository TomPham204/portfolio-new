/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { ExchangeIcon } from "../../../public/assets/projects/ExchangeIcon";
import "@/styles/projects.css";
import BxsLeftArrow from "../../../public/assets/projects/LeftArrow";
import BxsRightArrow from "../../../public/assets/projects/RightArrow";
import ProjectsTableMobile from "./ProjectsTableMobile";

export interface Project {
	title: string;
	descriptions: string[];
	preview?: string;
	previewType?: "image" | "video";
	link?: string;
	note?: string;
}

interface ProjectsBookProps {
	notifyLastPage: () => void;
}

export default function ProjectsBook(props: ProjectsBookProps) {
	const flipbook = useRef<typeof HTMLFlipBook>(null);
	const [bookLength, setBookLength] = useState(0);
	const [mobileViewType, setMobileViewType] = useState("web");
	const [mobileViewIndex, setMobileViewIndex] = useState(0);

	useEffect(() => {
		setBookLength(webProjects.length + otherProjects.length + 4);
	}, []);

	const checkIfLastPage = (e: any) => {
		if (e >= bookLength + 1) {
			props.notifyLastPage();
		}
	};

	const handleMobileViewPageChange = (direction: string = "next") => {
		const arrayLength =
			mobileViewType === "web"
				? webProjects.length
				: otherProjects.length;

		if (mobileViewIndex >= arrayLength - 1) {
			handleMobileViewTypeChange();
		} else {
			setMobileViewIndex(mobileViewIndex + 1);
		}
	};

	const handleMobileViewTypeChange = () => {
		setMobileViewType(mobileViewType === "web" ? "others" : "web");
		setMobileViewIndex(0);
	};

	return (
		<>
			<div className="hidden lg:block ">
				<HTMLFlipBook
					width={550}
					height={733}
					ref={flipbook}
					size="stretch"
					minWidth={315}
					maxWidth={1000}
					minHeight={500}
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
					clickEventForward={true}
					useMouseEvents={true}
					swipeDistance={0}
					showPageCorners={false}
					disableFlipByClick={false}
					style={{}}
				>
					{/* Book cover 1 and 2 */}
					<div className="cover-page p-5 bg-[#e3d0b5] border border-[#998466] text-[#785e3a]">
						<div className="w-full h-full flex justify-center items-center">
							<p className="text-3xl md:text-5xl font-bold text-center">
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
							<p className="text-3xl md:text-5xl font-bold text-center">
								Web projects
							</p>
						</div>
					</div>

					{webProjects.map((project: Project, index: number) => (
						<div
							key={index}
							className="inner-page w-full border border-[#c2b5a3] p-8 bg-[#fdfaf7] space-y-3 italic"
						>
							<p className="text-lg md:text-2xl font-bold text-center text-orange-900 font-[Handlee]">
								{project.title}
							</p>
							<p className="text-sm md:text-lg italic text-center text-yellow-700 font-PatrickHand tracking-wide">
								{project.descriptions[0]}
							</p>
							{project.preview &&
								(project.previewType === "video" ? (
									<video
										src={project.preview}
										loop
										muted
										autoPlay
										preload="auto"
										disableRemotePlayback
										playsInline
										className="object-contain w-full h-auto max-h-[50%] my-2"
									/>
								) : (
									<img
										src={project.preview}
										alt={`Project ${project.title}'s preview`}
										className="object-contain w-full h-auto max-h-[50%] my-2 hover:scale-105 transition-all duration-300"
									/>
								))}
							<div className="flex flex-col gap-3 font-PatrickHand">
								{project.descriptions
									.slice(1)
									.map((line: string, i: number) => (
										<p
											key={i}
											className="text-sm md:text-lg text-[#785e3a] tracking-wider text-justify w-full text-ellipsis text-nowrap overflow-hidden"
										>
											{line}
										</p>
									))}
							</div>
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									className="text-[#785e3a] tracking-wider text-sm md:text-lg font-PatrickHand underline"
								>
									Learn more
								</a>
							)}
						</div>
					))}

					{/* Other projects */}
					<div className="inner-page flex flex-col items-center gap-2 border border-[#c2b5a3] p-5 bg-[#fdfaf7]">
						<div className="w-full h-full flex justify-center items-center">
							<p className="text-3xl md:text-5xl font-bold text-center">
								Other projects
							</p>
						</div>
					</div>

					{otherProjects.map((project: Project, index: number) => (
						<div
							key={index}
							className="inner-page w-full border border-[#c2b5a3] p-8 bg-[#fdfaf7] space-y-3 italic"
						>
							<p className="text-lg md:text-2xl font-bold text-center text-orange-900 font-[Handlee]">
								{project.title}
							</p>
							<p className="text-sm md:text-lg italic text-center text-yellow-700 font-PatrickHand tracking-wide">
								{project.descriptions[0]}
							</p>
							{project.preview &&
								(project.previewType === "video" ? (
									<video
										src={project.preview}
										loop
										muted
										autoPlay
										preload="auto"
										disableRemotePlayback
										playsInline
										className="object-contain w-full h-auto max-h-[50%] my-2"
									/>
								) : (
									<img
										src={project.preview}
										alt={`Project ${project.title}'s preview`}
										className="object-contain w-full h-auto max-h-[50%] my-2 hover:scale-105 transition-all duration-300"
									/>
								))}
							<div className="flex flex-col gap-3 font-PatrickHand">
								{project.descriptions
									.slice(1)
									.map((line: string, i: number) => (
										<p
											key={i}
											className="text-sm md:text-lg text-[#785e3a] tracking-wider text-justify"
										>
											{line}
										</p>
									))}
							</div>
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									className="text-[#785e3a] tracking-wider text-sm md:text-lg font-PatrickHand underline"
								>
									Learn more
								</a>
							)}
						</div>
					))}

					{/* Filler page if necessary */}
					{/* <div className="inner-page flex flex-col items-center gap-2 border border-[#c2b5a3] p-5 bg-[#fdfaf7]">
						<div className="w-full h-full flex justify-center items-center"></div>
					</div> */}

					{/* Book cover 3 and 4 */}
					<div className="cover-page p-5 bg-[#e3d0b5] border border-[#998466] text-[#785e3a]">
						<div className="w-full h-full flex justify-center items-center"></div>
					</div>
					<div className="cover-page p-5 bg-[#e3d0b5] border border-[#998466] text-[#785e3a]">
						<div className="w-full h-full flex justify-center items-center">
							<p className="text-3xl md:text-5xl font-bold text-center">
								The end
							</p>
						</div>
					</div>
				</HTMLFlipBook>
			</div>
			<div className="block lg:hidden">
				<div className="border-2 border-[#737373] flex flex-col gap-2 rounded-lg p-4 shadow-sm bg-[#f8e0bb]">
					<div className="flex justify-between items-center">
						<div className="flex items-center justify-center font-PatrickHand capitalize text-xl">
							{mobileViewType + " projects"}
						</div>
						<div className="flex items-center justify-end gap-3">
							<button
								onClick={handleMobileViewTypeChange}
								className=""
							>
								<ExchangeIcon
									color="#b19b79"
									className="hover:animate-pulse transition-all duration-300"
								/>
							</button>
							<button
								className=""
								onClick={() =>
									handleMobileViewPageChange("prev")
								}
							>
								<BxsLeftArrow
									fill="#b19b79"
									className="hover:animate-pulse transition-all duration-300"
								/>
							</button>
							<button
								className=""
								onClick={() =>
									handleMobileViewPageChange("next")
								}
							>
								<BxsRightArrow
									fill="#b19b79"
									className="hover:animate-pulse transition-all duration-300"
								/>
							</button>
						</div>
					</div>

					{mobileViewType === "web" ? (
						<ProjectsTableMobile
							project={webProjects[mobileViewIndex]}
						/>
					) : (
						<ProjectsTableMobile
							project={otherProjects[mobileViewIndex]}
						/>
					)}
				</div>
			</div>
		</>
	);
}

const webProjects: Project[] = [
	{
		title: "Bartender site (2022)",
		descriptions: [
			"University course project.",
			"Built with HTML + CSS + JavaScript.",
			"Responsible for layout design, resource design, coding.",
		],
		preview: "/assets/projects/bartender.png",
		previewType: "image",
	},
	{
		title: "GovInsider (2022)",
		descriptions: [
			"A mock newspaper site for Spiritech Camp 2022.",
			"Built with ReactJS (NextJS, Remix) + TypeScript + styled-component.",
			"Worked with React Query and headless components.",
		],
	},
	{
		title: "Portfolio V1 (2022)",
		descriptions: [
			"The first version of my online portfolio.",
			"Built with Remix + CSS. Deployed on Vercel.",
			"Responsible for everything from design, code to deployment.",
		],
		link: "https://tompham-portfolio.vercel.app/",
		previewType: "image",
		preview: "/assets/projects/portfolio-v1.jpg",
	},
	{
		title: "Online Icebreaker (2022)",
		descriptions: [
			"Web app with icebreaking games for dating support.",
			"Built with NextJS + CSS. Deployed on Vercel.",
			"Responsible for everything from design, code to deployment.",
		],
		link: "https://tompham-icebreaker.vercel.app/",
		preview: "/assets/projects/icebreaker.png",
		previewType: "image",
	},
	{
		title: "MassBit Route (2022-2023)",
		descriptions: [
			"Admin site + user dashboard to manage Web3's investment and usage of user.",
			"Role: Front-end developer, back-end assistant",
			"Features: Authentication, Google/Github login, Stripe payment, dynamic component, complex log filtering, charts.",
			"Built with VueJS + NestJS + PostgresDB.",
		],
		link: "https://dapi.massbitroute.net/",
		preview: "/assets/projects/massbit.jpg",
		previewType: "image",
	},
	{
		title: "HelloTutors (2023-2024)",
		descriptions: [
			"Tutors – learners matching website.",
			"Features: Authentication, Google/Github login, Stripe payment, real-time chat",
			"Built with VueJS + TailwindCSS + NestJS + PostgresDB.",
			"Responsible for everything from design, code, to deployment",
		],
		previewType: "image",
	},
	{
		title: "Portfolio V2 (2024)",
		descriptions: [
			"An improvement on Portfolio V1 with better coding, redesigned flows, more consistent styling and more implementation of front-end stuff.",
			"Built with NextJS + TailwindCSS. Deployed on Vercel.",
			"Responsible for everything from design, code, to deployment",
		],
		link: "https://tompham-portfolio-v2.vercel.app/",
		previewType: "image",
		preview: "/assets/projects/portfolio-v2.jpg",
	},
];

const otherProjects: Project[] = [
	{
		title: "AIP-BDET",
		descriptions: [
			"Unpublished journal of the computational chemistry lab.",
			"Worked with a friend under Assoc. Prof. Huynh Kim Lam's guidance.",
			"Role: Second author.",
		],
		preview: "/assets/projects/aipbdet.png",
		previewType: "image",
	},
	{
		title: "Live Wallpapers",
		descriptions: [
			"Perfectly looped wallpaper videos.",
			"Made with Corel VideoStudio, Adobe Premiere.",
		],
		preview: "/assets/projects/livewallpaper2.mp4",
		previewType: "video",
	},
	{
		title: "Osu! Skin: Slim-eX",
		descriptions: [
			"Custom glass skin for the rhythm game.",
			"Made with Photoshop, FL Studio.",
		],
		preview: "/assets/projects/osu-skin.png",
		previewType: "image",
	},
	{
		title: "Yggdrasil Clan Resources",
		descriptions: [
			"Resources for a 30-member clan (Sheet, OCR script, Discord stickers,...).",
			"Role: Sub-leader.",
			"Responsibility: Manage and develop the clan, co-lead the members, design visuals and create technical resources.",
		],
		preview: "/assets/projects/yggdrasil.png",
		previewType: "image",
	},
	{
		title: "Learning for Everyone",
		descriptions: [
			"A university courses' materials website for the community.",
			"Role: Site uploader, Facebook page moderator.",
		],
	},
];
