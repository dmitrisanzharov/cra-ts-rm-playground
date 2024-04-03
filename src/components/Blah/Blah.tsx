import React from "react";
import Child from "./Child";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	// blah
	const [count, setCount] = React.useState(0);
	const [myName, setMyName] = React.useState("Dmitri");
	console.log("============================");
	console.log("parent re-renders");

	React.useEffect(() => {
		if (count === 3) {
			setMyName("James");
		}
	}, [count]);

	return (
		<div>
			<h1>Parent</h1>
			<h2>Count is: {count}</h2>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				inc
			</button>
			<hr />
			<Child name={myName} />
		</div>
	);
};

export default Blah;
