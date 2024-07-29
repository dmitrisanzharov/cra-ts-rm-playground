import React from "react";
import ReusableContext, { MyReusableContext } from "./ReusableContext";

type Props = {};

const Block2 = (props: Props) => {
	return (
		<ReusableContext name="Victor">
			<h1>Block2</h1>
			<Comp1 />
			<Comp2 />
		</ReusableContext>
	);
};

export default Block2;

const Comp1 = () => {
	const dataInComp1 = React.useContext(MyReusableContext);
	console.log("dataInComp1: ", dataInComp1);

	return <>
    <h1>comp1, count: {dataInComp1.count}</h1>
    <button onClick={()=> dataInComp1.changeCountFn(dataInComp1.count + 2)}>increase in block 2</button>
    </>;
};

const Comp2 = () => {
	const dataInComp2 = React.useContext(MyReusableContext);
	console.log("dataInComp2: ", dataInComp2);

	return <h1>comp2</h1>;
};
