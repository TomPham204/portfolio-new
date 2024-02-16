"use client";

import { useEffect, useRef, useState } from "react";
import "@/styles/projects.css";
import "@/styles/fireworks.css";

import FireworkEffect from "@/components/common/FireworkEffect";
import ProjectsBook from "@/components/projects/ProjectsBook";
import AchievementShelf from "@/components/projects/AchievementShelf";

export default function Projects() {
	const [showFirework, setShowFirework] = useState(false);
	const [enableFirework, setEnableFirework] = useState(true);
	let lastScrollPosition = 0;
	const book = useRef<Element>();
	const shelf = useRef<Element>();

	const handleScroll = () => {
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

	const notifyLastPage = () => {
		setShowFirework(true);
		setTimeout(() => {
			setShowFirework(false);
			setEnableFirework(false);
		}, 5800);
	};

	return (
		<main className="h-no-navbar w-full p-5">
			<div className={"book mx-auto h-no-navbar w-[130vh]"}>
				<ProjectsBook notifyLastPage={notifyLastPage} />
				<FireworkEffect isShow={showFirework && enableFirework} />
			</div>
			<div className="shelf w-full h-no-navbar p-5 mx-auto">
				<AchievementShelf />
			</div>
		</main>
	);
}
