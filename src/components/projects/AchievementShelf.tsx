import { useEffect } from "react";
import ShowcaseCard from "./ShowcaseCard";
import type { Achievement } from "./ShowcaseCard";
import "@/styles/projects.css";

export default function AchievementShelf() {
	useEffect(() => {
		const cards = document.querySelectorAll(".card-wrapper .bg");
		cards.forEach((card, index) => {
			(card as HTMLElement).style.setProperty(
				"filter",
				`hue-rotate(-${Math.max(
					(index * 360) / achievements.length,
					index * 50
				)}deg)`
			);
		});

		const imgs = document.querySelectorAll(".card-wrapper .back img");
		imgs.forEach((img, index) => {
			(img as HTMLElement).style.setProperty(
				"background-color",
				`${achievements[index].imageTone}`
			);
		});
	}, []);

	return (
		<div className="w-full h-3/4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-14 achievement-wrapper">
			{achievements.map((achievement: Achievement, index) => {
				return (
					<ShowcaseCard
						key={index}
						achievement={achievement}
					/>
				);
			})}
		</div>
	);
}

const achievements: Achievement[] = [
	{
		name: "TOEIC Certificate",
		year: 2023,
		proof: "/assets/projects/toeic-cert-flip.png",
		issuer: "IIG Vietnam",
		result: "Max score of 990",
		imageTone: "#647989",
	},
	{
		name: "Leadership Certificate",
		year: 2022,
		proof: "/assets/projects/leadership-cert.png",
		issuer: "National College of Ireland",
		result: "Course & Exam completion",
		imageTone: "#FCEFAF",
	},
	{
		name: "Spiritech Camp Certificate",
		year: 2022,
		proof: "/assets/projects/spiritlabs-cert.png",
		issuer: "Spirit Labs Co., Ltd.",
		result: "Program completion",
		imageTone: "#CBCBD5",
	},
];
