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
		id?: string;
		isHighlighted?: boolean;
	};
}

const CustomNode = ({ data }: CustomNodeProps) => {
	if (!data.source && !data.target) return;
	if (data.isHighlighted == undefined) data.isHighlighted = false;

	const getNodeStyleById = (id: string) => {
		let classes = "border-black ";
		if (parseInt(id) < 10) {
			switch (id) {
				case '1':
					classes +=
						'bg-gradient-to-br from-sky-800 to-fuchsia-800 text-neutral-50 font-bold brightness-125 animate-hue-rotate ';
					break;
				case '2':
					classes +=
						'bg-gradient-to-br from-violet-500 to-fuchsia-500 text-neutral-50 border-fuchsia-500 font-bold ';
					break;
				case '3':
					classes +=
						'bg-gradient-to-br from-green-600 to-cyan-500 text-neutral-50 border-green-500 font-bold ';
					break;
				case '4':
					classes +=
						'bg-gradient-to-br from-blue-500 to-cyan-500 text-neutral-50 border-blue-500 font-bold ';
					break;
				case '5':
					classes +=
						'bg-gradient-to-br from-yellow-300 to-orange-400 text-neutral-50 border-yellow-400 font-bold ';
					break;
				case '6':
					classes +=
						'bg-gradient-to-br from-red-500 to-pink-300 text-neutral-50 border-red-500 font-bold ';
					break;
				case '7':
					classes +=
						'bg-gradient-to-br from-yellow-600 to-amber-800 text-neutral-50 border-amber-700 font-bold ';
					break;
				default:
					break;
			}
		} else {
			if (id.startsWith("2")) classes += "!border-fuchsia-500";
			else if (id.startsWith("3")) classes += "border-green-500";
			else if (id.startsWith("4")) classes += "border-blue-500";
			else if (id.startsWith("5")) classes += "border-amber-500";
			else if (id.startsWith("6")) classes += "border-red-500";
			else if (id.startsWith("7")) classes += "border-orange-900";
		}

		if (data.isHighlighted)
			classes += " saturate-150 brightness-110 hue-rotate-[10deg] ";
		return classes;
	};

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
					"text-lg text-center min-w-[9rem] p-2 border-[3px] cursor-pointer bg-neutral-50 transition-all duration-200 rounded " +
					getNodeStyleById(data.id!)
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
				id: data.id,
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
		if (node.children?.length > 0) {
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
						id: child.id,
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
	const [[nodes, connections], setData] = useState(() =>
		getNodesAndConnections(cells)
	);
	const nodeTypes = useMemo(
		() => ({
			customNode: CustomNode,
		}),
		[]
	);

	const highlightChildren = (node: any, nodes: Array<any>) => {
		if (!node || !nodes || !node?.data || nodes?.length == 0) return;
		const children = nodes.filter((n: any) => n.id.startsWith(node.id));
		children.forEach((child: any) => {
			child.data.isHighlighted = true;
		});
		setData([nodes, connections]);
	};

	const unHighlightChildren = (nodes: any) => {
		if (nodes.length == 0) return;
		nodes.forEach((node: any) => {
			node.data.isHighlighted = false;
		});
		setData([nodes, connections]);
	};

	return (
		<div className="w-screen lg:w-[80vw] h-[85vh] rounded-lg shadow-md mx-auto border-2 border-[#4683b8]">
			{nodes.length && (
				<ReactFlow
					nodes={nodes}
					nodeTypes={nodeTypes}
					edges={connections}
					fitView
					className="rounded-lg bg-neutral-100"
					onNodeMouseEnter={(e, node) => {
						unHighlightChildren(nodes);
						highlightChildren(node, nodes);
					}}
					onNodeMouseLeave={() => {
						unHighlightChildren(nodes);
					}}
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
	position: { x: 0, y: -230 },
	children: [
		{
			id: "21",
			label: "Basics",
			position: { x: -170, y: -420 },
			children: [
				{
					id: "211",
					label: "HTML",
					position: { x: -330, y: -580 },
					children: [],
				},
				{
					id: "212",
					label: "CSS",
					position: { x: -430, y: -500 },
					children: [],
				},
				{
					id: "213",
					label: "JavaScript",
					position: { x: -400, y: -400 },
					children: [],
				},
			],
		},
		{
			id: "22",
			label: "Frameworks & Libs",
			position: { x: -100, y: -570 },
			children: [
				{
					id: "221",
					label: "ReactJS",
					position: { x: -250, y: -690 },
					children: [],
				},
				{
					id: "222",
					label: "NextJS",
					position: { x: -180, y: -800 },
					children: [],
				},
				{
					id: "223",
					label: "Remix",
					position: { x: -20, y: -800 },
					children: [],
				},
				{
					id: "224",
					label: "VueJS",
					position: { x: 50, y: -690 },
					children: [],
				},
			],
		},
		{
			id: "23",
			label: "Preprocessors",
			position: { x: 130, y: -500 },
			children: [
				{
					id: "231",
					label: "SCSS",
					position: { x: 250, y: -650 },
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
					position: { x: 370, y: -550 },
					children: [],
				},
				{
					id: "242",
					label: "Bootstrap",
					position: { x: 480, y: -460 },
					children: [],
				},
			],
		},
	],
};
const be = {
	id: '3',
	label: 'Back-end',
	position: { x: 320, y: -150 },
	children: [
		{
			id: '31',
			label: 'Frameworks & Libs',
			position: { x: 660, y: -225 },
			children: [
				{
					id: '311',
					label: 'NestJS',
					position: { x: 850, y: -390 },
					children: [],
				},
				{
					id: '312',
					label: 'ExpressJS',
					position: { x: 880, y: -300 },
					children: [],
				},
			],
		},
		{
			id: '32',
			label: 'GraphQL',
			position: { x: 550, y: 35 },
			children: [],
		},
		{
			id: '33',
			label: 'RESTful APIs',
			position: { x: 625, y: -305 },
			children: [],
		},
		{
			id: '34',
			label: 'WebSockets',
			position: { x: 600, y: -50 },
			children: [],
		},
		{
			id: '35',
			label: 'Databases',
			position: { x: 630, y: -140 },
			children: [
				{
					id: '351',
					label: 'PostgreSQL',
					position: { x: 920, y: -210 },
					children: [],
				},
				{
					id: '352',
					label: 'QuestDB',
					position: { x: 920, y: -125 },
					children: [],
				},
				{
					id: '353',
					label: 'MySQL',
					position: { x: 910, y: -40 },
					children: [],
				},
			],
		},
		{
			id: '36',
			label: 'TypeORM',
			position: { x: 580, y: -380 },
			children: [],
		},
	],
};
const devops = {
	id: '4',
	label: 'DevOps',
	position: { x: 120, y: 270 },
	children: [
		{
			id: '41',
			label: 'CI/CD',
			position: { x: 20, y: 580 },
			children: [
				{
					id: '411',
					label: 'Jenkins',
					position: { x: -70, y: 850 },
					children: [],
				},
				{
					id: '412',
					label: 'Github Actions',
					position: { x: 100, y: 930 },
					children: [],
				},
			],
		},
		{
			id: '42',
			label: 'Containerization',
			position: { x: 220, y: 650 },
			children: [
				{
					id: '421',
					label: 'Docker',
					position: { x: 280, y: 850 },
					children: [],
				},
				{
					id: '422',
					label: 'Kubernetes',
					position: { x: 450, y: 750 },
					children: [],
				},
			],
		},
		{
			id: '43',
			label: 'Monitoring',
			position: { x: 410, y: 580 },
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
			id: '44',
			label: 'Cloud',
			position: { x: 570, y: 400 },
			children: [
				{
					id: '441',
					label: 'GCP',
					position: { x: 850, y: 370 },
					children: [],
				},
				{
					id: '442',
					label: 'AWS',
					position: { x: 850, y: 480 },
					children: [
						{ id: '4421', label: 'Cloudwatch', position: { x: 1060, y: 440 } },
						{ id: '4422', label: 'EC2', position: { x: 1040, y: 550 } },
					],
				},
			],
		},
		{
			id: '45',
			label: 'Security',
			position: { x: 570, y: 500 },
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
	position: { x: -300, y: -70 },
	children: [
		{
			id: "51",
			label: "Version Control",
			position: { x: -630, y: -230 },
			children: [
				{
					id: "511",
					label: "Git",
					position: { x: -840, y: -370 },
					children: [],
				},
				{
					id: "512",
					label: "Bitbucket",
					position: { x: -870, y: -280 },
					children: [],
				},
			],
		},
		{
			id: "52",
			label: "Inspection",
			position: { x: -650, y: -120 },
			children: [
				{
					id: "521",
					label: "Lens",
					position: { x: -950, y: -180 },
					children: [],
				},
			],
		},
		{
			id: "53",
			label: "Progress tracking",
			position: { x: -630, y: 0 },
			children: [
				{
					id: "531",
					label: "Redmine",
					position: { x: -950, y: -50 },
					children: [],
				},
				{
					id: "532",
					label: "Clickup",
					position: { x: -970, y: 30 },
					children: [],
				},
				{
					id: "533",
					label: "Trello",
					position: { x: -940, y: 110 },
					children: [],
				},
			],
		},
		{
			id: "54",
			label: "Nginx",
			position: { x: -610, y: -330 },
			children: [],
		},
	],
};
const others = {
	id: "6",
	label: "Others",
	position: { x: -250, y: 230 },
	children: [
		{
			id: "61",
			label: "English",
			position: { x: -600, y: 270 },
			children: [
				{
					id: "611",
					label: "TOEIC 990",
					position: { x: -900, y: 230 },
					children: [],
				},
				{
					id: "612",
					label: "IELTS 7.0",
					position: { x: -900, y: 320 },
					children: [],
				},
			],
		},
		{
			id: "62",
			label: "Agile",
			position: { x: -620, y: 400 },
			children: [
				{
					id: "621",
					label: "Scrum",
					position: { x: -880, y: 430 },
					children: [],
				},
				{
					id: "622",
					label: "Kanban",
					position: { x: -870, y: 510 },
					children: [],
				},
			],
		},
		{
			id: "63",
			label: "Multimedia",
			position: { x: -580, y: 570 },
			children: [
				{
					id: "631",
					label: "Adobe Premiere",
					position: { x: -900, y: 650 },
					children: [],
				},
				{
					id: "632",
					label: "Adobe Photoshop",
					position: { x: -910, y: 730 },
					children: [],
				},
				{
					id: "633",
					label: "Corel VideoStudio",
					position: { x: -910, y: 810 },
					children: [],
				},
				{
					id: "634",
					label: "SketchBook Pro",
					position: { x: -900, y: 890 },
					children: [],
				},
			],
		},
		{
			id: "64",
			label: "Languages",
			position: { x: -320, y: 650 },
			children: [
				{
					id: "641",
					label: "Python",
					position: { x: -520, y: 800 },
					children: [],
				},
				{
					id: "642",
					label: "Kotlin",
					position: { x: -450, y: 930 },
					children: [],
				},
				{
					id: "643",
					label: "JavaScript",
					position: { x: -280, y: 870 },
					children: [],
				},
			],
		},
	],
};
const testing = {
	id: '7',
	label: 'QA',
	position: { x: 310, y: 105 },
	children: [
		{ id: '71', label: 'Define testcases', position: { x: 650, y: 130 } },
		{ id: '72', label: 'Jest', position: { x: 630, y: 205 } },
		{ id: '73', label: 'Cypress', position: { x: 600, y: 280 } },
	],
};
const cells = {
	id: "1",
	label: "My skills",
	position: { x: 0, y: 0 },
	children: [fe, be, testing, tools, others, devops],
};
