import Image from "next/image";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import openIcon from "./../assets/open-icon.svg";
import { Tooltip } from "antd";

const APITooltip = (
	<div className="text-sm">
		<p className="font-bold">Data</p>
		<p>JSONPlaceholder API</p>
	</div>
);
const TailwindCSSTooltip = (
	<div className="text-sm">
		<p className="font-bold">Styling</p>
		<p>Tailwind CSS</p>
	</div>
);
const TURBOTooltip = (
	<div className="text-sm">
		<p className="font-bold">Bootstrapper</p>
		<p>Turbo</p>
	</div>
);
function TopicCard({
	topicImage,
	topicAlt,
	description,
	topicTitle,
	developer,
	developerProfilePic,
	developerLink,
}) {

	const showTopic = () => {
		console.log("clicked");
	};
	return (
		<Card className="w-96 m-5">
			<CardHeader color="cyan" className="relative h-56 m-5 object-fill hover:scale-105 duration-300 ease-in-out">
				<Image
					src={topicImage}
					alt={topicAlt}
					width="full"
					height="full"
				/>
			</CardHeader>
			<CardBody className="text-center">
				<Typography variant="h5" className="mb-2 flex gap-1">
					<button className="cursor-pointer hover:text-black" onClick={showTopic}>
						{topicTitle}
					</button>
					<Image src={openIcon} alt="openIcon" />
				</Typography>
				<Typography className="text-left">
					{description}
				</Typography>
			</CardBody>
			<CardFooter divider className="flex items-center justify-between py-3">
				<Typography variant="small" className=" w-auto px-2 items-center h-8 flex gap-1 rounded-full ">
					<a href={developerLink} className="bg-black rounded-full w-8 h-8" target="_blank" rel="noreferrer">
						<Image src={developerProfilePic} alt="developerpic" width={30} height={30} />
					</a>
					<span className="text-slate-900">{developer}</span>
				</Typography>
				<Typography variant="small" color="gray" className="flex gap-1">
					<Tooltip placement="bottom" title={APITooltip}>
						<span className=" text-[12px] hover:cursor-pointer bg-[#FF4D00] hover:bg-[#d84303] px-2 text-center rounded-full text-white">
							<Link href="https://tanstack.com/" target="_blank" >API</Link>
						</span>
					</Tooltip>
					<Tooltip placement="bottom" title={TailwindCSSTooltip}>
						<span className=" text-[12px] hover:cursor-pointer bg-[#46E138] hover:bg-[#2fa025]  px-2  text-center rounded-full text-white">
							<Link href="www.google.com" target="_blank" >TCSS</Link>
						</span>
					</Tooltip>
					<Tooltip placement="bottom" title={TURBOTooltip}>
						<span className=" text-[12px] hover:cursor-pointer bg-[#FFD600] hover:bg-[#bbb59a]  px-2  text-center rounded-full text-white">
							<Link href="www.google.com" target="_blank" >TURBO</Link>
						</span>
					</Tooltip>
				</Typography>
			</CardFooter>
		</Card>
	);
}

export default TopicCard;
