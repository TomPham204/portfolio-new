import React from "react";
import type { SVGProps } from "react";

export default function LeftArrow(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2em"
			height="2em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill={props.fill || "#cbcbd4"}
				d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645"
			></path>
		</svg>
	);
}
