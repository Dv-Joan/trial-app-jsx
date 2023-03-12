'use client'

import { useCallback, useState } from "react";

function UseCallback() {
	const [count, setCount] = useState(0);
	const increment = useCallback(() => {
		setCount(count + 1);
	}, [count]);
	const decrement = useCallback(() => {
		setCount(count - 1);
	}, [count]);
	return (
		<div className="h-screen">
			<span className="w-36 text-3xl bg-slate-500 text-white py-1.5 pl-3 pr-3 rounded-lg drop-shadow-lg">
				UseCallback
			</span>
			<div className="flex justify-center items-center">
				<div className="flex justify-center gap-8 mt-10 mb-36">
					<span className=" self-center border-2 border-slate-900 rounded-lg px-7 py-2">
						{count}
					</span>
					<button
						className="py-1 px-3 m-2 bg-blue-500 rounded-lg text-white active:bg-blue-400"
						onClick={increment}
					>
						Increment
					</button>
					<button
						className="py-1 px-3 m-2 bg-red-500 rounded-lg text-white active:bg-red-400"
						onClick={decrement}
					>
						Decrement
					</button>
				</div>
			</div>
		</div>
	);
}

export default UseCallback;
