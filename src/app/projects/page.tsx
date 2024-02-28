"use client";

import { useEffect, useRef, useState } from "react";
import "@/styles/projects.css";
import "@/styles/fireworks.css";

import FireworkEffect from "@/components/common/FireworkEffect";
import ProjectsBook from "@/components/projects/ProjectsBook";
import AchievementShelf from "@/components/projects/AchievementShelf";
import useWindowDimensions from "@/helper/useWindowSizes";

export default function Projects() {
	const [showFirework, setShowFirework] = useState(false);
	const [enableFirework, setEnableFirework] = useState(true);
	const [enableMobileView, setEnableMobileView] = useState(false);
	const { width, height } = useWindowDimensions();

	let lastScrollPosition = 0;
	const book = useRef<Element>();
	const shelf = useRef<Element>();

	const handleScroll = () => {
		if (window.innerWidth < 1280) return;
		const st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > lastScrollPosition) {
			window.scrollBy({
				top: document.body.scrollHeight,
				behavior: "auto",
			});
		} else {
			window.scrollTo({ top: 0, behavior: "auto" });
		}
		lastScrollPosition = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	};

	useEffect(() => {
		book.current = document.querySelector(".book")!;
		shelf.current = document.querySelector(".shelf")!;
		const handleScrollEvent = (e: Event) => {
			e.preventDefault();
			handleScroll();
		};

		window.addEventListener("scroll", handleScrollEvent);

		return () => window.removeEventListener("scroll", handleScrollEvent);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (!!width && !!height && width / height < 4 / 3) {
				setEnableMobileView(true);
			} else setEnableMobileView(false);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [height, width]);

	const notifyLastPage = () => {
		setShowFirework(true);
		setTimeout(() => {
			setShowFirework(false);
			setEnableFirework(false);
		}, 5800);
	};

	return (
		<main className="min-h-no-navbar w-full">
			<div
				className={
					"book p-5 min-h-no-navbar w-full lg:mx-auto lg:w-screen max-w-[130vh] flex flex-col items-center justify-center"
				}
			>
				<ProjectsBook
					notifyLastPage={notifyLastPage}
					useMobileView={enableMobileView}
				/>
				<FireworkEffect isShow={showFirework && enableFirework} />
			</div>
			<div className="w-full xl:max-w-[110rem] h-full lg:h-no-navbar p-10 mx-auto">
				<AchievementShelf />
			</div>
		</main>
	);
}
