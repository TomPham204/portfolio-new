"use client";
import { useState } from "react";
import "@/styles/projects.css";
import Image from "next/image";

export interface Achievement {
	name: string;
	year: number;
	proof: string;
	description?: string;
	result: string;
	issuer: string;
}

interface ShowcaseCardProps {
	achievement: Achievement;
	className?: string;
}

export default function ShowcaseCard(props: ShowcaseCardProps) {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div
			className={
				"card-wrapper shadow-lg w-full h-full rounded-xl " +
				(props.className || "")
			}
		>
			<div
				className={
					"w-full h-full rounded-xl relative" +
					(isClicked ? " flip" : " not-flip")
				}
				onClick={() => setIsClicked(!isClicked)}
				style={{
					backgroundColor: "black",
					backgroundImage: `url("/assets/projects/card-background.jpg")`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundBlendMode: "normal",
				}}
			>
				<div className="absolute top-0 left-0 w-full h-full bg bg-gradient-to-tr from-purple-500 to-pink-500 bg-opacity-100 mix-blend-multiply rounded-xl"></div>
				<div className="front w-full h-full p-5  rounded-xl">
					<div className="w-full h-full flex flex-col gap-5 items-center text-neutral-50 cursor-pointer mix-blend-normal">
						<p className="text-center text-2xl font-bold">
							{props.achievement.name}
						</p>
						<p className="text-left text-lg w-full">
							Degree of achievement: {props.achievement.result}
						</p>
						<p className="text-left text-lg w-full">
							Year: {props.achievement.year}
						</p>
						<p className="text-left text-lg w-full">
							Issuer: {props.achievement.issuer}
						</p>
					</div>
				</div>
				<div className="back w-full h-full bg-slate-950 rounded-xl">
					<Image
						src={props.achievement.proof}
						alt={props.achievement.name}
						className="rounded-t-xl"
						loading="lazy"
						fill={true}
						objectFit="contain"
						quality={100}
					/>
				</div>
			</div>
		</div>
	);
}
