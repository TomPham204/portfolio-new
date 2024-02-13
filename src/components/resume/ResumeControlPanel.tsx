"use client";

import { useEffect, useState } from "react";

interface ResumeControlPanelProps {
	notifyViewChange: (useLegacyView: boolean) => void;
}

export default function ResumeControlPanel(props: ResumeControlPanelProps) {
	const [useLegacyView, setUseLegacyView] = useState(false);

	useEffect(() => {
		props.notifyViewChange(!useLegacyView);
	}, [props, useLegacyView]);

	return (
		<div className="flex flex-col w-40 -mx-4">
			<div className="flex">
				<label className="switch">
					<input
						type="checkbox"
						defaultChecked={!useLegacyView}
						onClick={() => setUseLegacyView(!useLegacyView)}
					/>
					<span className="slider rounded-[34px] before:rounded-full"></span>
				</label>
				<div className="flex flex-col h-full w-full justify-evenly -ml-2">
					<p>Compact view</p>
					<p>Legacy view</p>
				</div>
			</div>
		</div>
	);
}
