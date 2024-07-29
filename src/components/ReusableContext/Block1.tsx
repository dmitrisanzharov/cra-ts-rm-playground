import React from "react";
import ReusableContext, { MyReusableContext } from "./ReusableContext";

type Props = {};

const Block1 = (props: Props) => {
	return (
		<ReusableContext name="Dmitri">
			<h1>Block1</h1>
			<Comp1 />
			<Comp2 />
		</ReusableContext>
	);
};

export default Block1;

const Comp1 = () => {
	const dataInComp1 = React.useContext(MyReusableContext);
	console.log("dataInComp1: ", dataInComp1);

	return (
		<div>
			<h1>Comp 1</h1>
			<h2>Count: {dataInComp1.count}</h2>
		</div>
	);
};

const Comp2 = () => {
	const dataInComp2 = React.useContext(MyReusableContext);
	console.log("dataInComp2: ", dataInComp2);

	return (
		<div>
			<h1>comp2</h1>
			<button onClick={() => dataInComp2.changeCountFn(dataInComp2.count + 1)}>inc</button>
		</div>
	);
};
