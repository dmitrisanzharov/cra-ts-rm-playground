import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const childRef = React.useRef<any>({});
    const childRef2 = React.useRef<any>({});



    React.useEffect(() => {
        console.log('childRef', childRef.current);
        if(childRef.current.style){
            childRef.current.style.color = 'red'
        }

        if(childRef2.current.style){
            childRef2.current.style.color = 'blue'
        }
    }, []);
    
    return <div>
        <Child ref={{ref1: childRef, ref2: childRef2} as any} inputProps={{placeholder: 'hello'}} />
    </div>;
};

export default Blah;


const Child = React.forwardRef((props: any, ref: any) => {
    return <div>
        <h1 ref={ref.ref2}>Hello World</h1>
        <input ref={ref.ref1} {...props.inputProps} />
    </div>;
})