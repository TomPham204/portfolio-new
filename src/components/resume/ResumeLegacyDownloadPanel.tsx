import Link from "next/link";

export default function ResumeLegacyDownloadPanel() {
	return (
		<div className="border-2 border-[rgb(94,39,0)] border-dashed mt-5 lg:mt-0 cursor-default flex justify-center items-center px-5 py-4 font-Handlee font-bold backdrop-blur-xs z-20 lg:absolute w-full lg:w-[12rem] xl:w-[14vw] text-lg xl:text-[1.4vw] lg:top-[6rem] lg:right-[15vw] xl:top-[6.5vw] xl:right-[20.5vw] text-[#515151] text-center leading-[1.6] bg-[#e4e4e482] rounded-md">
			<span>
				Either visit{" "}
				<Link
					href="/"
					className="inline no-underline text-gradient cursor-pointer"
				>
					Home
				</Link>{" "}
				for contact, change resume view mode or{" "}
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
