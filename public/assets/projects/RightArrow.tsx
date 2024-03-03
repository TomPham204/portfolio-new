import React from "react";
import type { SVGProps } from "react";

export default function RightArrow(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.5em"
			height="1.5em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill={props.fill || "#cbcbd4"}
				d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886"
			></path>
		</svg>
	);
}
