import Link from "next/link";

export default function ResumeLegacyDownloadPanel() {
	return (
		<div className="mx-auto mt-5 lg:mt-0 cursor-default flex justify-center items-center px-5 font-Handlee font-bold backdrop-blur-xs z-20 lg:absolute w-full lg:w-[10rem] xl:w-[14vw] text-lg xl:text-[1.4vw] lg:top-[9rem] lg:right-[15vw] xl:top-[9.5vw] xl:right-[20.5vw]">
			<span className="text-[#515151] text-center leading-[1.6] bg-[#e4e4e482] rounded-md border-2 border-[rgb(94,39,0)] border-dashed w-full py-4">
				Visit{" "}
				<Link
					href="/"
					className="inline no-underline text-gradient cursor-pointer"
				>
					Home
				</Link>{" "}
				for contact info, or{" "}
				<a
					className="text-[#551a8b] inline underline"
					href="/assets/resume/PhamCongTuan - Fullstack.pdf"
					download
				>
					download pdf
				</a>
			</span>
		</div>
	);
}
