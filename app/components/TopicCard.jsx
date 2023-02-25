import React from "react";
import Image from "next/image";
import { Tooltip } from "antd";

const APITooltip = (
	<div className="text-sm">
		<p className="font-bold">API</p>
		<p>JSONPlaceholder API</p>
	</div>
);
const TailwindCSSTooltip = (
	<div className="text-sm">
		<p className="font-bold">Tailwind CSS</p>
		<p>Tailwind CSS</p>
	</div>
);
const TURBOTooltip = (
	<div className="text-sm">
		<p className="font-bold">Turbo</p>
		<p>Turbo</p>
	</div>
);
function TopicCard({
	topicImage,
	topicAlt,
	description,
	topicTitle,
	developer,
	developerLink,
}) {
	return (
		<div className="m-7">
			<div className="bg-white p-10 cursor-pointer hover:drop-shadow-xl rounded-xl my-5 w-1/3 h-4/5 hover:scale-105 duration-300 ease-out">
				<Image
					src={topicImage}
					className="rounded-2xl"
					alt={topicAlt}
					width="auto"
					height="auto"
				/>
				<div className="mt-5">
					<p className="font-bold text-xl">{topicTitle}</p>
					<span className="text-slate-400">{description}</span>
					<hr className="mt-5 mb-7" />
					<div className="flex gap-20">
						<div className="flex gap-3">
							<p className=" w-6 h-6 rounded-full bg-black text-white text-center ">
								<a href={developerLink} target="_blank" rel="noreferrer">
									J
								</a>
							</p>
							<div className="">
								<span className="font-black text-black">{developer}</span>
							</div>
						</div>
						<div className="flex gap-3">
							<Tooltip placement="bottom" title={APITooltip}>
								<span className=" text-sm hover:cursor-pointer bg-[#FF4D00] hover:bg-[#d84303]  px-2 py-0.5 text-center rounded-full text-white">
									API
								</span>
							</Tooltip>
							<Tooltip placement="bottom" title={TailwindCSSTooltip}>
								<span className=" text-sm hover:cursor-pointer bg-[#46E138] hover:bg-[#2fa025]  px-2 py-0.5 text-center rounded-full text-white">
									TCSS
								</span>
							</Tooltip>
							<Tooltip placement="bottom" title={TURBOTooltip}>
								<span className=" text-sm hover:cursor-pointer bg-[#FFD600] hover:bg-[#b19403]  px-2 py-0.5 text-center rounded-full text-white">
									TURBO
								</span>
							</Tooltip>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopicCard;
