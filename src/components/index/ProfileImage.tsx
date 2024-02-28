"use client";

import Image from "next/image";
import profileImage1 from "/public/assets/index/avatar1.png";
import profileImage2 from "/public/assets/index/avatar2.jpeg";
import "@/styles/index.css";
import { useState } from "react";
import LeftArrow from "../../../public/assets/index/LeftArrow";
import BxsRightArrow from "../../../public/assets/index/RightArrow";
import Swipeable from "@/components/common/Swipable";

export default function ProfileImage() {
	const [currentImage, setCurrentImage] = useState(1);

	return (
		<div className="relative w-full flex items-center gap-2">
			<button
				className={
					"w-fit animate-pulse hover:animate-none hover:brightness-110 transition-all duration-300 hidden lg:block" +
					(currentImage === 1 ? " invisible" : "")
				}
				onClick={() => setCurrentImage(Math.max(1, currentImage - 1))}
			>
				<LeftArrow fill="#86afd8" />
			</button>
			<div className="flex lg:gap-2 w-full">
				<div className="w-full lg:max-w-[85%] mx-auto h-auto max-h-[35vh] lg:max-h-[65vh]">
					<Swipeable
						onSwipeRight={() =>
							setCurrentImage(Math.max(1, currentImage - 1))
						}
						onSwipeLeft={() =>
							setCurrentImage(Math.min(2, currentImage + 1))
						}
						onSwipeDown={() => null}
						onSwipeUp={() => null}
						minSwipeDistance={30}
						classes="w-full h-full"
					>
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
							src="/assets/index/avatar2.png"
							alt="My image 2"
							className={`w-full h-full object-contain transition-all duration-300 ${
								currentImage === 2
									? "opacity-100"
									: "opacity-0 hidden"
							}`}
						/>
					</Swipeable>
				</div>
			</div>
			<button
				className={
					"w-fit animate-pulse hover:animate-none hover:brightness-110 transition-all duration-300 hidden lg:block" +
					(currentImage === 2 ? " invisible" : " ")
				}
				onClick={() => setCurrentImage(Math.min(2, currentImage + 1))}
			>
				<BxsRightArrow fill="#86afd8" />
			</button>
		</div>
	);
}
