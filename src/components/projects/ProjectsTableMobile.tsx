import Link from "next/link";
import type { Project } from "./ProjectsBook";

interface ProjectsTableMobileProps {
	project: Project;
}

export default function ProjectsTableMobile(props: ProjectsTableMobileProps) {
	return (
		<div className="h-full">
			<table className="border-0 border-separate border-spacing-0.5 bg-[#f8e0bb] font-PatrickHand text-lg xl:text-xl h-full">
				<tbody>
					<tr className="h-fit">
						<td className="p-2 border border-[#6e6e6e] flex items-start">
							<p className="">Name</p>
						</td>
						<td className="p-2 border border-[#6e6e6e]">
							<p className="">{props.project.title}</p>
						</td>
					</tr>
					<tr className="h-fit">
						<td className="p-2 border border-[#6e6e6e]">
							<p className="">Description</p>
						</td>
						<td className="p-2 border border-[#6e6e6e]">
							{props.project.descriptions.map(
								(line: string, i: number) => (
									<p
										key={i}
										className=""
									>
										{line}
									</p>
								)
							)}
							{props.project.link && (
								<span>
									◾{" "}
									<Link
										className="underline"
										href={props.project.link!}
										target="_blank"
									>
										Learn more
									</Link>
								</span>
							)}
						</td>
					</tr>
					{props.project.preview && (
						<tr className="h-full">
							<td className="p-2 border border-[#6e6e6e]">
								<p className="">Preview</p>
							</td>
							<td className="p-2 border border-[#6e6e6e]">
								{props.project.previewType === "video" ? (
									<video
										src={props.project.preview}
										loop
										muted
										autoPlay
										preload="auto"
										disableRemotePlayback
										playsInline
										className="object-contain w-full h-auto max-h-[50%]"
									/>
								) : (
									<img
										src={props.project.preview}
										alt={`Project ${props.project.title}'s preview`}
										className="object-contain w-full h-auto max-h-[40vh] hover:brightness-110 transition-all duration-300"
									/>
								)}
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
