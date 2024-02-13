"use client";

import { useEffect, useState } from "react";

interface ResumeControlPanelProps {
	notifyViewChange: (viewMode: string) => void;
}

export default function ResumeControlPanel(props: ResumeControlPanelProps) {
	const [viewMode, setViewMode] = useState("legacy");

	useEffect(() => {
		props.notifyViewChange(viewMode);
	}, [viewMode]);

	return (
		<div className="flex items-center bg-[#e4e4e465] backdrop-blur-xs z-20 mx-auto">
			<button
				className={
					"w-28 text-center border-2 border-violet-800 p-3 hover:bg-[#e4e4e4b2]  border-r-0 rounded-l-lg" +
					(viewMode === "compact" ? " bg-[#d7d7d7d6]" : "")
				}
				onClick={() => setViewMode("compact")}
			>
				Compact
			</button>
			<button
				className={
					"w-28 text-center border-2 border-violet-800 p-3 hover:bg-[#e4e4e4b2]" +
					(viewMode === "legacy" ? " bg-[#d7d7d7d6]" : "")
				}
				onClick={() => setViewMode("legacy")}
			>
				Legacy
			</button>
			<button
				className={
					"w-28 text-center border-2 border-violet-800 p-3 hover:bg-[#e4e4e4b2] border-l-0 rounded-r-lg" +
					(viewMode === "dual" ? " bg-[#d7d7d7d6]" : "")
				}
				onClick={() => setViewMode("dual")}
			>
				Two-page
			</button>
		</div>
	);
}
