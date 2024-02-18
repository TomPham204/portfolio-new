import Link from "next/link";

export default function ResumeLegacyDownloadPanel() {
	return (
		<div className="w-[13vw] h-fit p-3 cursor-default bg-[#e4e4e482] rounded-md border-2 border-[#5e2700] border-dashed flex flex-col gap-3 items-center font-['Handlee'] font-bold text-[1.4vw] absolute top-[9.5vw] right-[21vw] backdrop-blur-xs z-20">
			<a
				className="text-[#551a8b] border-b-2 border-[#551a8b]"
				href="https://1drv.ms/b/s!ArPVZgo5x8MIgslfcwxjXLWNp8s__g?e=hfP1xI"
				target="_blank"
			>
				Download pdf
			</a>
			<span className="text-[#515151] text-justify">
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
