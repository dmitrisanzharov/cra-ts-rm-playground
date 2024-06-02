import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	let count = React.useRef(0);
    let count2 = 0; 
    const h1RefInChild = React.useRef<any>({});


    const [render, setRender] = React.useState(0);

    count.current = count.current + 1;
    count2 = count2 + 1;

    const propsForChild = {
        name: 'Dmitri',
        numberOne: 123
    }


    function handleClick(){
        h1RefInChild.current.innerHTML = 'yo'
    }

    console.log('re-rendered parent')


	return (
		<div>
			<h1>hello, this is count: {count.current}</h1>
            <h1>hello, this is count2: {count2}</h1>
            <button onClick={()=> setRender(render+1)}>re-render</button>
            <hr />
            <ChildOne {...propsForChild} ref={h1RefInChild} />
            <button onClick={handleClick}>click me</button>
		</div>
	);
};


const ChildOne: any = React.forwardRef((props: any, ref: any) => {
    console.log('re-rendered child')

    return (
        <div>
            <h1 ref={ref}>This is child, name is: {props.name}</h1>
        </div>
    )
})

export default Blah;
