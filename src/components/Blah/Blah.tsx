import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

	const myRef = React.useRef<any>({});

	const focusButton: any = () => myRef.current.innerHTML = 'yo';
	

	return (
		<div>
			<FancyButton ref={myRef} />
			<button onClick={focusButton}>Focus the Fancy Button</button>
		</div>
	);
};

export default Blah;


const FancyButton: React.FC<any> = React.forwardRef((props, ref) => {
	console.log('props in child: ', props);
	console.log('ref', ref);
	return (
		<div>
			<h1 ref={ref as any}>anything else</h1>
		</div>
	)
});
