"use client";

import Image from "next/image";
import profileImage1 from "/public/assets/index/avatar1.png";
import profileImage2 from "/public/assets/index/avatar2.jpeg";
import "@/styles/index.css";
import { useState } from "react";
import LeftArrow from "../../../public/assets/index/LeftArrow";
import BxsRightArrow from "../../../public/assets/index/RightArrow";

export default function ProfileImage() {
	const [currentImage, setCurrentImage] = useState(1);

	return (
		<div className="relative w-full flex items-center gap-2 mt-10 lg:mt-0">
			<button
				className={
					"w-fit hover:animate-pulse hidden lg:block" +
					(currentImage === 1 ? " invisible" : "")
				}
				onClick={() => setCurrentImage(Math.max(1, currentImage - 1))}
			>
				<LeftArrow fill="#86afd8" />
			</button>
			<div className="flex lg:gap-2 w-full">
				<div className="w-full lg:max-w-[85%] mx-auto h-auto max-h-[65vh]">
					<img
						src="/assets/index/avatar1.png"
						alt="My image 1"
						className={`w-full h-full object-contain transition-all duration-300 ${
							currentImage === 1
								? "opacity-100"
								: "opacity-0 hidden"
						}`}
					/>
					<img
						src="/assets/index/avatar2.jpeg"
						alt="My image 2"
						className={`w-full h-full object-contain transition-all duration-300 ${
							currentImage === 2
								? "opacity-100"
								: "opacity-0 hidden"
						}`}
					/>
				</div>
			</div>
			<button
				className={
					"w-fit hover:animate-pulse hidden lg:block" +
					(currentImage === 2 ? " invisible" : " ")
				}
				onClick={() => setCurrentImage(Math.min(2, currentImage + 1))}
			>
				<BxsRightArrow fill="#86afd8" />
			</button>
		</div>
	);
}
