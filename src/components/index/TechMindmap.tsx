"use client";
import { get } from "http";
import { useMemo, useState } from "react";
import ReactFlow, { Handle, Position, Controls } from "reactflow";
import "reactflow/dist/style.css";

interface CustomNodeProps {
	data: {
		label: string;
		source: {
			top?: boolean;
			right?: boolean;
			bottom?: boolean;
			left?: boolean;
		};
		target: {
			top?: boolean;
			right?: boolean;
			bottom?: boolean;
			left?: boolean;
		};
	};
}

const CustomNode = ({ data }: CustomNodeProps) => {
	if (!data.source && !data.target) return;

	return (
		<div key={data.label}>
			{data.source.right && (
				<Handle
					type="source"
					position={Position.Right}
					id="right"
					className="invisible"
					isConnectable={false}
				/>
			)}
			{data.source.top && (
				<Handle
					type="source"
					position={Position.Top}
					id="top"
					className="invisible"
					isConnectable={false}
				/>
			)}
			{data.source.left && (
				<Handle
					type="source"
					position={Position.Left}
					id="left"
					className="invisible"
					isConnectable={false}
				/>
			)}
			{data.source.bottom && (
				<Handle
					type="source"
					position={Position.Bottom}
					id="bottom"
					className="invisible"
					isConnectable={false}
				/>
			)}
			{data.target.right && (
				<Handle
					type="target"
					position={Position.Right}
					id="right-t"
					className="invisible"
					isConnectable={false}
				/>
			)}
			{data.target.top && (
				<Handle
					type="target"
					position={Position.Top}
					id="top-t"
					className="invisible"
					isConnectable={false}
				/>
			)}
			{data.target.left && (
				<Handle
					type="target"
					position={Position.Left}
					id="left-t"
					className="invisible"
					isConnectable={false}
				/>
			)}
			{data.target.bottom && (
				<Handle
					type="target"
					position={Position.Bottom}
					id="bottom-t"
					className="invisible"
					isConnectable={false}
				/>
			)}

			<div
				className={
					"text-lg text-center min-w-[8rem] p-2 border border-black bg-white rounded " +
					(data.label == "My skills" &&
						"bg-gradient-to-br from-violet-500 to-fuchsia-500 text-neutral-50 font-bold")
				}
			>
				{data.label}
			</div>
		</div>
	);
};

function getNodesAndConnections(data: any) {
	const nodes: Array<any> = [
		{
			id: data.id,
			position: data.position,
			type: "customNode",
			data: {
				label: data.label,
				source: { top: true, right: true, bottom: true, left: true },
				target: {
					top: false,
					right: false,
					bottom: false,
					left: false,
				},
			},
		},
	];
	const connections: Array<any> = [];

	function traverse(node: any) {
		if (node.children.length > 0) {
			node.children.forEach((child: any) => {
				// position
				if (
					child.position.x >= node.position.x &&
					child.position.y <= node.position.y
				) {
					if (-child.position.y < child.position.x) {
						child.targetPosition = "left";
					} else {
						child.targetPosition = "bottom";
					}
				} else if (
					child.position.x <= node.position.x &&
					child.position.y <= node.position.y
				) {
					if (-child.position.y < -child.position.x) {
						child.targetPosition = "right";
					} else {
						child.targetPosition = "bottom";
					}
				} else if (
					child.position.x <= node.position.x &&
					child.position.y >= node.position.y
				) {
					if (child.position.y < -child.position.x) {
						child.targetPosition = "right";
					} else {
						child.targetPosition = "top";
					}
				} else if (
					child.position.x >= node.position.x &&
					child.position.y >= node.position.y
				) {
					if (child.position.y < child.position.x) {
						child.targetPosition = "left";
					} else {
						child.targetPosition = "top";
					}
				}

				// connections
				if (child.position.x >= Math.abs(child.position.y)) {
					connections.push({
						id: `e${node.id}-${child.id}`,
						source: node.id,
						target: child.id,
						sourceHandle: "right",
						animated: true,
					});
				} else if (-child.position.x > Math.abs(child.position.y)) {
					connections.push({
						id: `e${node.id}-${child.id}`,
						source: node.id,
						target: child.id,
						sourceHandle: "left",
						animated: true,
					});
				} else if (child.position.y >= Math.abs(child.position.x)) {
					connections.push({
						id: `e${node.id}-${child.id}`,
						source: node.id,
						target: child.id,
						sourceHandle: "bottom",
						animated: true,
					});
				} else if (-child.position.y >= Math.abs(child.position.x)) {
					connections.push({
						id: `e${node.id}-${child.id}`,
						source: node.id,
						target: child.id,
						sourceHandle: "top",
						animated: true,
					});
				}

				nodes.push({
					id: child.id,
					position: child.position,
					type: "customNode",
					data: {
						label: child.label,
						target: { [child.targetPosition]: true },
						source: ["top", "right", "bottom", "left"]
							.filter((pos) => pos !== child.targetPosition)
							.reduce(
								(acc, pos) => ({ ...acc, [pos]: true }),
								{}
							),
					},
					targetPosition: child.targetPosition,
				});

				traverse(child);
			});
		}
	}
	traverse(data);
	return [nodes, connections];
}

export default function TechMindmap() {
	const nodeTypes = useMemo(
		() => ({
			customNode: CustomNode,
		}),
		[]
	);
	const [nodes, connections] = useMemo(
		() => getNodesAndConnections(cells),
		[]
	);

	console.log("Nodes:", nodes);
	console.log("Connections:", connections);

	return (
		<div className="w-screen lg:w-[80vw] h-[85vh] rounded shadow-md mx-auto">
			{nodes.length && (
				<ReactFlow
					nodes={nodes}
					nodeTypes={nodeTypes}
					edges={connections}
					fitView
					className="rounded-lg bg-neutral-100"
				>
					<Controls />
				</ReactFlow>
			)}
		</div>
	);
}

const fe = {
	id: "2",
	label: "Front-end",
	position: { x: 0, y: -220 },
	children: [
		{
			id: "21",
			label: "Basics",
			position: { x: -200, y: -380 },
			children: [
				{
					id: "211",
					label: "HTML",
					position: { x: -420, y: -530 },
					children: [],
				},
				{
					id: "212",
					label: "CSS",
					position: { x: -500, y: -430 },
					children: [],
				},
				{
					id: "213",
					label: "JavaScript",
					position: { x: -450, y: -330 },
					children: [],
				},
			],
		},
		{
			id: "22",
			label: "Frameworks & Libs",
			position: { x: -130, y: -520 },
			children: [
				{
					id: "221",
					label: "ReactJS",
					position: { x: -300, y: -680 },
					children: [],
				},
				{
					id: "222",
					label: "NextJS",
					position: { x: -200, y: -780 },
					children: [],
				},
				{
					id: "223",
					label: "Remix",
					position: { x: -20, y: -780 },
					children: [],
				},
				{
					id: "224",
					label: "VueJS",
					position: { x: 50, y: -680 },
					children: [],
				},
			],
		},
		{
			id: "23",
			label: "Preprocessors",
			position: { x: 130, y: -520 },
			children: [
				{
					id: "231",
					label: "SCSS",
					position: { x: 270, y: -650 },
					children: [],
				},
			],
		},
		{
			id: "24",
			label: "CSS Frameworks",
			position: { x: 200, y: -380 },
			children: [
				{
					id: "241",
					label: "TailwindCSS",
					position: { x: 400, y: -550 },
					children: [],
				},
				{
					id: "242",
					label: "Bootstrap",
					position: { x: 500, y: -420 },
					children: [],
				},
			],
		},
	],
};
const be = {
	id: "3",
	label: "Back-end",
	position: { x: 280, y: 80 },
	children: [
		{
			id: "31",
			label: "Frameworks & Libs",
			position: { x: 500, y: -150 },
			children: [
				{
					id: "311",
					label: "NestJS",
					position: { x: 750, y: -280 },
					children: [],
				},
			],
		},
		{
			id: "32",
			label: "GraphQL",
			position: { x: 500, y: 250 },
			children: [],
		},
		{
			id: "33",
			label: "RESTful APIs",
			position: { x: 580, y: -50 },
			children: [],
		},
		{
			id: "34",
			label: "WebSockets",
			position: { x: 570, y: 150 },
			children: [],
		},
		{
			id: "35",
			label: "Databases",
			position: { x: 600, y: 50 },
			children: [
				{
					id: "351",
					label: "PostgreSQL",
					position: { x: 820, y: -80 },
					children: [],
				},
				{
					id: "352",
					label: "QuestDB",
					position: { x: 820, y: 10 },
					children: [],
				},
				{
					id: "353",
					label: "ORM",
					position: { x: 820, y: 100 },
					children: [],
				},
			],
		},
	],
};
const devops = {
	id: "4",
	label: "DevOps",
	position: { x: -200, y: 0 },
	children: [
		{
			id: "41",
			label: "CI/CD",
			position: { x: -200, y: 0 },
			children: [
				// {
				// 	id: "411",
				// 	label: "GitHub Actions",
				//
				// 	children: [],
				// },
			],
		},
		{
			id: "42",
			label: "Containers",
			position: { x: -200, y: 0 },
			children: [
				{
					id: "421",
					label: "Docker",
					position: { x: -200, y: 0 },
					children: [],
				},
				{
					id: "422",
					label: "Kubernetes",
					position: { x: -200, y: 0 },
					children: [],
				},
			],
		},
		{
			id: "43",
			label: "Monitoring",
			position: { x: -200, y: 0 },
			children: [
				// {
				// 	id: "431",
				// 	label: "Grafana",
				//
				// 	children: [],
				// },
				// {
				// 	id: "432",
				// 	label: "Prometheus",
				//
				// 	children: [],
				// },
			],
		},
		{
			id: "44",
			label: "Cloud",
			position: { x: -200, y: 0 },
			children: [
				{
					id: "441",
					label: "GCP",

					children: [],
				},
			],
		},
		{
			id: "45",
			label: "Security",
			position: { x: -200, y: 0 },
			children: [
				// {
				// 	id: "451",
				// 	label: "OWASP",
				//
				// 	children: [],
				// },
			],
		},
	],
};
const tools = {
	id: "5",
	label: "Tools",
	position: { x: -300, y: 0 },
	children: [
		{
			id: "51",
			label: "Version Control",
			position: { x: -600, y: -130 },
			children: [
				{
					id: "511",
					label: "Git",
					position: { x: -820, y: -250 },
					children: [],
				},
				{
					id: "512",
					label: "Bitbucket",
					position: { x: -860, y: -160 },
					children: [],
				},
			],
		},
		{
			id: "52",
			label: "Container",
			position: { x: -670, y: 30 },
			children: [
				{
					id: "521",
					label: "Lens",
					position: { x: -950, y: -40 },
					children: [],
				},
				{
					id: "522",
					label: "WSL",
					position: { x: -930, y: 70 },
					children: [],
				},
			],
		},
		{
			id: "53",
			label: "Progress tracking",
			position: { x: -630, y: 200 },
			children: [
				{
					id: "531",
					label: "Redmine",
					position: { x: -880, y: 180 },
					children: [],
				},
				{
					id: "532",
					label: "Clickup",
					position: { x: -850, y: 280 },
					children: [],
				},
				{
					id: "533",
					label: "Trello (Kanban)",
					position: { x: -810, y: 370 },
					children: [],
				},
			],
		},
	],
};
const others = {
	id: "6",
	label: "Others",
	position: { x: -170, y: 250 },
	children: [
		{
			id: "61",
			label: "English",
			position: { x: -550, y: 450 },
			children: [
				{
					id: "611",
					label: "TOEIC 990",
					position: { x: -850, y: 500 },
					children: [],
				},
				{
					id: "612",
					label: "IELTS 7.0",
					position: { x: -830, y: 590 },
					children: [],
				},
			],
		},
		{
			id: "62",
			label: "Agile",
			position: { x: -500, y: 580 },
			children: [
				{
					id: "621",
					label: "Scrum",
					position: { x: -790, y: 680 },
					children: [],
				},
				{
					id: "622",
					label: "Kanban",
					position: { x: -750, y: 770 },
					children: [],
				},
			],
		},
		{
			id: "63",
			label: "Multimedia",
			position: { x: -280, y: 630 },
			children: [
				{
					id: "631",
					label: "Adobe Premiere",
					position: { x: -620, y: 850 },
					children: [],
				},
				{
					id: "632",
					label: "Adobe Photoshop",
					position: { x: -630, y: 920 },
					children: [],
				},
				{
					id: "633",
					label: "Corel VideoStudio",
					position: { x: -630, y: 990 },
					children: [],
				},
				{
					id: "634",
					label: "SketchBook Pro",
					position: { x: -620, y: 1060 },
					children: [],
				},
			],
		},
		{
			id: "64",
			label: "Languages",
			position: { x: -70, y: 750 },
			children: [
				{
					id: "641",
					label: "Python",
					position: { x: -270, y: 870 },
					children: [],
				},
				{
					id: "642",
					label: "Kotlin",
					position: { x: -270, y: 950 },
					children: [],
				},
			],
		},
	],
};

const cells = {
	id: "1",
	label: "My skills",
	position: { x: 0, y: 0 },
	children: [fe, be, tools, others],
};
