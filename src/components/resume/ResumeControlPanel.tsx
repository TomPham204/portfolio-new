"use client";

import { useEffect, useState } from "react";

interface ResumeControlPanelProps {
	notifyViewChange: (viewMode: string) => void;
}

export default function ResumeControlPanel(props: ResumeControlPanelProps) {
	const [viewMode, setViewMode] = useState("legacy");

	useEffect(() => {
		props.notifyViewChange(viewMode);
	}, [props, viewMode]);

	return (
		<div className="hidden lg:flex items-center bg-[#e4e4e465] backdrop-blur-xs z-20 mx-auto">
			<button
				className={
					"w-28 text-center border-2 border-violet-800 p-3 hover:text-shadow-sm hover:shadow-[#bc92ff] border-r-0 rounded-l-lg transition-all duration-300" +
					(viewMode === "compact" ? " bg-[#d6d6d6e3]" : "")
				}
				onClick={() => setViewMode("compact")}
			>
				Compact
			</button>
			<button
				className={
					"w-28 text-center border-2 border-violet-800 p-3 hover:text-shadow-sm hover:shadow-[#bc92ff]" +
					(viewMode === "legacy" ? " bg-[#d6d6d6e3]" : "")
				}
				onClick={() => setViewMode("legacy")}
			>
				Legacy
			</button>
			<button
				className={
					"w-28 text-center border-2 border-violet-800 p-3 hover:text-shadow-sm hover:shadow-[#bc92ff] border-l-0 rounded-r-lg" +
					(viewMode === "dual" ? " bg-[#d6d6d6e3]" : "")
				}
				onClick={() => setViewMode("dual")}
			>
				Two-page
			</button>
		</div>
	);
}
