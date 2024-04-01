import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	const [reRender, setReRender] = React.useState(0);
	const countRef = React.useRef<any>({ count: 0 });
    const myDivRef = React.useRef<any>(null);
    const myInputRef = React.useRef<any>(null);

	function handleClick() {
		countRef.current.count++;
		setReRender(countRef.current.count);
        myDivRef.current.innerHTML = 'yo';
        myInputRef.current.focus();
	}

	return (
		<div>
			<h1>the count is: {countRef.current.count}</h1>
			<button onClick={handleClick}>click me</button>
            <hr />
            <Child ref={{ref1: myDivRef, ref2: myInputRef}} {...{name: 'blah', id: 2}}/>
		</div>
	);
};

export default Blah;

const Child: React.FC<any> = React.forwardRef((props: any, ref: any) => {
    // console.log('props', args);
	return (
		<div>
			<h2>this is a child</h2>
            <div ref={ref.ref1}>one</div>
            <input ref={ref.ref2} />
		</div>
	);
});
