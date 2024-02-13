"use client";

import Image from "next/image";
import Link from "next/link";

interface ContactPanelProps {
	styles?: string;
}

export default function ContactPanel(props?: ContactPanelProps) {
	return (
		<div className="panel w-fit mt-5 h-max flex gap-8 items-end justify-center border-b-2 pb-2 px-1 border-b-amber-500">
			<style jsx>
				{`
					${props?.styles}
				`}
			</style>
			<Link
				href="mailto:tompham204@gmail.com"
				target="_blank"
				className="w-12 h-12 relative hover:scale-120  transition-all duration-300 ease-in-out"
			>
				<Image
					src="/assets/contact_panel/email.png"
					alt="Email"
					fill={true}
					objectFit="contain"
					className="hover:animate-bounce"
				/>
			</Link>
			<Link
				href="https://www.linkedin.com/in/tompham204/"
				target="_blank"
				className="w-12 h-12 relative hover:scale-120 transition-all duration-300 ease-in-out"
			>
				<Image
					src="/assets/contact_panel/linkedin.png"
					alt="Linkedin"
					fill={true}
					objectFit="contain"
					className="hover:animate-bounce"
				></Image>
			</Link>
			<Link
				href="https://linktr.ee/tompham"
				target="_blank"
				className="w-12 h-12 relative hover:scale-120 transition-all duration-300 ease-in-out"
			>
				<Image
					src="/assets/contact_panel/linktree.png"
					alt="Linktree"
					fill={true}
					objectFit="contain"
					className="hover:animate-bounce"
				></Image>
			</Link>
			<Link
				href="https://github.com/TomPham204"
				target="_blank"
				className="w-12 h-12 relative hover:scale-120 transition-all duration-300 ease-in-out"
			>
				<Image
					src="/assets/contact_panel/github.png"
					alt="Github"
					fill={true}
					objectFit="contain"
					className="hover:animate-bounce"
				></Image>
			</Link>
		</div>
	);
}
