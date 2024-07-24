import React from "react";
// @ts-ignore

type Props = any;

const useMyHook = () => {
	const [number, setNumber] = React.useState(0);

	function handleClick() {
		setNumber(number + 1);
	}

	return { number, handleClick };
};

const Blah: React.FC<any> = (props: Props) => {
	const { number, handleClick } = useMyHook();

	return (
		<div>
			<h1>{number}</h1>
			<button onClick={handleClick}>inc</button>
		</div>
	);
};

export default Blah;

function slowFunction(num: any) {
	console.log("Calling slow function");
	for (let i = 0; i <= 1000000000; i++) {}
	return num * 2;
}
