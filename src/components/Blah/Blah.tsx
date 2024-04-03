import React from "react";
import Child from './Child';
// @ts-ignore

type Props = any;

const ChildMemo = React.memo(() => <Child />); 

const Blah: React.FC<any> = (props: Props) => {
	// blah
	const [count, setCount] = React.useState(0);
	console.log('============================');
	console.log('parent re-renders');

	return (
		<div>
			<h1>Parent</h1>
			<h2>Count is: {count}</h2>
			<button onClick={() => setCount(count + 1)}>inc</button>
			<hr />
			<ChildMemo />
		</div>
	);
};

export default Blah;
