"use client";

import ContactPanel from "@/components/common/ContactPanel";
import Typewriter from "typewriter-effect";
import "@/styles/index.module.css";

export default function Home() {
	const currentYear = new Date().getFullYear();
	const selfIntroduction = [
		'<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I make jokes when I\'m uncomfortable.</p>',
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I'm INFJ-A and my favorite pastime is collecting.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I seek self-improvement and knowledge.</p>`,
		'<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I\'m a web developer.</p>',
		'<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I\'m a resource designer.</p>',
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I'm always open to new opportunities in life.p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I'm currently single.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I live in HCMC.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">My current age is ${
			currentYear - 2001
		}.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I hate Tet holidays.p>`,
	];

	return (
		<main className="flex flex-col">
			<div className="w-11/12 mx-auto flex h-no-navbar justify-center">
				<div className="w-1/2 h-full">
					<div className="w-11/12 h-full relative mx-auto flex flex-col items-center justify-center">
						<img
							src="/assets/index/avatar1.png"
							alt="Avatar"
							className="w-full object-contain"
						/>
						<div className="flex flex-col justify-center">
							<p className="font-PatrickHand font-bold italic text-2xl tracking-wider text-center">
								Hi, I&apos;m Tom.
							</p>
							<Typewriter
								options={{
									strings: selfIntroduction,
									autoStart: true,
									loop: true,
									delay: 120,
								}}
							/>
						</div>
					</div>
				</div>
				<div className="w-1/2 h-full flex flex-col gap-5 justify-center items-center">
					<p className="font-['Pacifico'] text-12xl font-bold">
						Meet
					</p>
					<p className="font-DancingScript font-bold text-11xl text-gradient text-center">
						Tom Pham
					</p>
					<ContactPanel />
				</div>
			</div>
		</main>
	);
}
