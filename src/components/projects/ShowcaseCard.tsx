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
	imageTone?: string;
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
					backgroundImage: `url("/assets/projects/card-background.png")`,
					backgroundSize: "400%",
					backgroundPosition: `${Math.random() * 100}% ${
						Math.random() * 100
					}%`,
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
						<p className="text-justify text-lg tracking-wide w-full">
							<b>Degree of achievement:</b>{" "}
							{props.achievement.result}
						</p>
						<p className="text-justify text-lg tracking-wide w-full">
							<b>Year:</b> {props.achievement.year}
						</p>
						<p className="text-justify text-lg tracking-wide w-full">
							<b>Issuer:</b> {props.achievement.issuer}
						</p>
					</div>
				</div>
				<div className="back w-full h-full rounded-xl overflow-hidden">
					<div className={"w-full h-full"}>
						<Image
							src={props.achievement.proof}
							alt={props.achievement.name}
							className="rounded-xl"
							loading="lazy"
							fill={true}
							objectFit="contain"
							quality={100}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
