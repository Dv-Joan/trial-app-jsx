'use client'
import TopicCard from "./components/TopicCard";
const imageContext = require.context("./assets", true);
import hooksLogo from "./assets/hooks-logo.jpeg"
import tanstack from "./assets/tanstack.jpg"
import crudlogo from "./assets/clanscrud.png"
import UseReducer from "./components/UseReducer";
import dvjoan from "./assets/dv-joan.png"
import Fetch from "./components/Fetch";
import { App as CrudApp } from "./components/Crud/App";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import FetchPro from "./components/FetchPro";
const queryClient = new QueryClient();
import { ThemeProvider } from "@material-tailwind/react";
// export const images = imageContext.keys().map(imageContext);

export default function Home() {
	return (
		<ThemeProvider>
			<div className="bg-gray-200 py-10 font-Roboto">
				<p className="font-bold text-4xl pb-10 text-left pl-12">Topics</p>
				<div className="grid grid-cols-3 mx-5">
					<TopicCard
						// topicImage={images["./tanstack2.jpg"]}
						topicImage={crudlogo}
						topicTitle="Clans CRUD"
						developerProfilePic={dvjoan}
						topicAlt="CRUD"
						developer="@dv-joan"
						developerLink="https://github.com/Dv-Joan"
						description="Create, Read, Update, and Delete (CRUD) are the four basic functions that models should be able to do, at most. "
					/><QueryClientProvider client={queryClient}>

						<TopicCard
							topicImage={tanstack}
							topicTitle="TanStack Library"
							developerProfilePic={dvjoan}

							topicAlt="tanstack"
							developer="@safaera"
							developerLink="https://github.com/Dv-Joan"
							description="Library that provides professional tools  for React developers focused on data management and state management."
						/>

					</QueryClientProvider>

					<TopicCard
						topicImage={hooksLogo}
						topicTitle="useContext"
						developerProfilePic={dvjoan}

						topicAlt="useContext"
						developer="@safaera"
						developerLink="https://github.com/Dv-Joan"
						description="This hook is used to share data between components without having to pass props down the tree"
					/>

					<TopicCard
						topicImage={hooksLogo}
						topicTitle="useReducer"
						developerProfilePic={dvjoan}

						topicAlt="useReducer"
						developer="@safaera"
						developerLink="https://github.com/Dv-Joan"
						description="This hook provides a efficient state manager that allows by switch / cases manipulate the actions of the state."
					/>
					<TopicCard
						topicImage={hooksLogo}
						topicTitle="useCallback"
						developerProfilePic={dvjoan}

						topicAlt="useCallback"
						developer="@safaera"
						developerLink="https://github.com/Dv-Joan"
						description="useCallback allows memorize a function, so it will not be recreated every time the component is rendered."
					/><TopicCard
						topicImage={hooksLogo}
						topicTitle="useMemo"
						developerProfilePic={dvjoan}
						topicAlt="useMemo"
						developer="@krammer"
						developerLink="https://github.com/Dv-Joan"
						description="useMemo is a hook that allows memorize a value, so it will not be recalculated unless the dependencies change"
					/>
				</div>
			</div>
		</ThemeProvider>
	);
}
