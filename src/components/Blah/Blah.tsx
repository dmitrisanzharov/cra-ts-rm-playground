import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	const [reRender, setReRender] = React.useState(0);
	const myVar1 = React.useRef<any>({ count: 0 });


	let myVar2 = 0;
	

	return (
		<div>
			<h1>Hello</h1>
			<h2>myVar1: {myVar1.current.count}</h2>
            <h2>ReRender: {reRender}</h2>
			<h2>myVar2: {myVar2}</h2>
			<button onClick={() => {
                setReRender(reRender + 1);
                myVar1.current.count++;
                myVar2++;
            }}>reRender</button>
		</div>
	);
};

export default Blah;
