import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;


const Blah: React.FC<any> = (props: Props) => {

    let anyValue = 1;

    anyValue = 2;

    console.log('parent 1');
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        console.log('ran use effect 4')
    }, []);

        React.useEffect(() => {
        console.log('ran use effect 4')
    }, []);

    return <div>
        <h1>Hello</h1>
        <p>Counter: {counter}</p>
        <ChildComponent anyValue={anyValue} />
    </div>;
};

export default Blah;


const ChildComponent: React.FC<any> = ({anyValue}) => {

    console.log('child 2');

    React.useEffect(() => {
        console.log('ran child use effect 3')
    }, []);

    return <div>
        <h1>Child</h1>
    </div>;
}
