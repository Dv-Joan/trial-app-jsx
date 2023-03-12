import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";

function FetchPro() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["apiData"],
		queryFn: () =>
			fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
				res.json(),
			),

		// NBA Api
		/* {
			fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25", {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"8b4dc7a25cmsh7206cbbedb5ccf0p12cbc6jsnf5d7b1734aa3",
					"X-RapidAPI-Host": "free-nba.p.rapidapi.com",
				},
			})
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
		}, */
	});
	if (isLoading) return <Loader />;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="h-auto mb-96">
			<span className=" w-56 text-center text-3xl bg-slate-500 text-white py-1.5 pl-3 pr-3 rounded-lg drop-shadow-lg">
				✔️ TanStack React Query
			</span>
			
			<ul className="pt-7 text-center">
				<div className="grid grid-cols-2">
				{data.map((user) => (
					<li
						key={user.id}
						className="my-7 px-3 rounded-lg drop-shadow-lg"
					>
						<h4 className="text-2xl font-semibold ">{user.name}</h4>
						<h5 className="">{user.email}</h5>
					</li>
				))}</div>
			</ul>
		</div>
	);
}
export default FetchPro;
