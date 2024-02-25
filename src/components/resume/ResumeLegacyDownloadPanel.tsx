import Link from "next/link";

export default function ResumeLegacyDownloadPanel() {
	return (
		<div className="w-2/3 lg:w-[13vw] lg:min-w-[180px] h-fit mx-auto lg:mx-0 my-5 lg:my-0 p-3 cursor-default bg-[#e4e4e482] rounded-md border-2 border-[#5e2700] border-dashed flex flex-col gap-3 items-center font-['Handlee'] font-bold static text-lg lg:text-[1.4vw] lg:absolute lg:top-[9.5vw] lg:right-[21vw] backdrop-blur-xs z-20">
			<a
				className="text-[#551a8b] border-b-2 border-[#551a8b]"
				href="https://1drv.ms/b/s!ArPVZgo5x8MIgslfcwxjXLWNp8s__g?e=hfP1xI"
				target="_blank"
			>
				Download pdf
			</a>
			<span className="text-[#515151] text-justify leading-8">
				Visit{" "}
				<Link
					href="/"
					className="inline-block no-underline text-gradient cursor-pointer"
				>
					Home
				</Link>{" "}
				for methods of contact.
			</span>
		</div>
	);
}
