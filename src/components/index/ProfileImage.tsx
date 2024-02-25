"use client";

import Image from "next/image";
import profileImage1 from "/public/assets/index/avatar1.png";
import profileImage2 from "/public/assets/index/avatar2.jpeg";
import "@/styles/index.css";
import { useState } from "react";
import BxsLeftArrow from "../../../public/assets/index/LeftArrow";
import BxsRightArrow from "../../../public/assets/index/RightArrow";

export default function ProfileImage() {
	const [currentImage, setCurrentImage] = useState(1);

	return (
		<div className="relative w-full flex items-center gap-2">
			<button
				className={
					"hover:animate-pulse" +
					(currentImage === 1 ? " invisible" : "")
				}
				onClick={() => setCurrentImage(Math.max(1, currentImage - 1))}
			>
				<BxsLeftArrow fill="#86afd8" />
			</button>
			<div className="flex gap-2 w-full">
				<div className="w-full h-[90vw] md:h-[45vw] lg:h-[33vw] mt-40 lg:mt-0 relative">
					<Image
						src={profileImage1}
						alt="Avatar"
						fill={true}
						priority={true}
						className={`w-full object-contain transition-all duration-300 ${
							currentImage === 1 ? "opacity-100" : "opacity-0"
						}`}
					/>
					<Image
						src={profileImage2}
						alt="Avatar"
						fill={true}
						loading="lazy"
						priority={false}
						placeholder="blur"
						className={`w-full object-contain transition-all duration-300 ${
							currentImage === 2 ? "opacity-100" : "opacity-0"
						}`}
					/>
				</div>
			</div>

			<button
				className={
					"hover:animate-pulse" +
					(currentImage === 2 ? " invisible" : " invisible")
				}
				onClick={() => setCurrentImage(Math.min(2, currentImage + 1))}
			>
				<BxsRightArrow fill="#86afd8" />
			</button>
		</div>
	);
}
