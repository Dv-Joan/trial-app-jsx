import TopicCard from "./components/TopicCard";
import useEffectLogo from ".//../public/images/useeffect-hook.jpg";
export default function Home() {
	return (
		<div className="bg-gray-200  py-10 font-Roboto">
			<p className="font-bold text-4xl pb-10 text-left pl-12">Topics</p>
			<TopicCard
				topicImage={useEffectLogo}
				topicTitle="useEffect"
				topicAlt="useEffect"
				developer="@dv-joan"
				developerLink="https://github.com/Dv-Joan"
				description="useEffect is a hook that is used to perform side effects in functional components. "
			/>
			<TopicCard
				topicImage={useEffectLogo}
				topicTitle="useMemo"
				topicAlt="useMemo"
				developer="@krammer"
				developerLink="https://github.com/Dv-Joan"
				description="useMemo is a hook that is used to perform side effects in functional components."
			/>
			<TopicCard
				topicImage={useEffectLogo}
				topicTitle="useContext"
				topicAlt="useContext"
				developer="@safaera"
				developerLink="https://github.com/Dv-Joan"
				description="useContext is a hook that is used to perform side effects in functional components."
			/>
		</div>
	);
}
