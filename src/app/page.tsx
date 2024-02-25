"use client";

import ContactPanel from "@/components/common/ContactPanel";
import Typewriter from "typewriter-effect";
import "@/styles/index.css";
import ProfileImage from "@/components/index/ProfileImage";

export default function Home() {
	const currentYear = new Date().getFullYear();
	const selfIntroduction = [
		'<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I\'m a web developer and a resource designer.</p>',
		'<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I make jokes when I\'m uncomfortable.</p>',
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I'm an INFJ-A. My favorite pastime is collecting.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I'm extremely bad with recognizing faces and names.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I seek self-improvement and a diverse range of knowledge.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I'm always open to new opportunities in life.<p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I find sleep cycle interesting.<p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I have a small circle of friends and I'm currently single.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I love travelling abroad and experiencing new cultures.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">My current age is ${
			currentYear - 2001
		}.</p>`,
		`<p class="font-PatrickHand font-bold italic text-2xl tracking-wider">I hate Tet holidays. It's boring and exhausting.<p>`,
	];

	return (
		<main className="flex flex-col">
			<div className="w-11/12 mx-auto flex flex-col lg:flex-row h-no-navbar justify-center">
				<div className="w-full lg:w-1/2 h-[40vh] lg:h-full">
					<div className="w-11/12 h-full relative mx-auto flex flex-col items-center justify-center">
						<ProfileImage />
						<div className="hidden lg:flex flex-col justify-center cursor-default">
							<p className="font-PatrickHand font-bold italic text-2xl tracking-wider text-center">
								Hi, I&apos;m Tom.
							</p>
							<Typewriter
								options={{
									strings: selfIntroduction,
									autoStart: true,
									loop: true,
									delay: 100,
								}}
							/>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-1/2 h-full mt-20 lg:mt-0 flex flex-col gap-8 justify-center items-center">
					<p className="font-['Pacifico'] text-8xl lg:text-12xl font-bold w-full text-center cursor-default">
						Meet
					</p>
					<p className="font-DancingScript font-bold text-8xl lg:text-12xl text-gradient w-full text-center cursor-default">
						Tom Pham
					</p>
					<ContactPanel />
				</div>
			</div>
		</main>
	);
}
