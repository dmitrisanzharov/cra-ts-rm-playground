import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const inputRefOne = React.useRef<any>(null);
    const inputRefTwo = React.useRef<any>(null);
    let name = 'Blah';
    let value = 26;

    React.useEffect(() => {
        console.log('inputRefOne', inputRefOne);
        console.log('inputRefTwo', inputRefTwo);
        inputRefTwo.current.textContent = 'This is the second ref';
    }, []);

    function handleClick(){
        inputRefOne.current.focus();
    }

    return (
        <div>
            <Child ref={{ ref1: inputRefOne, ref2: inputRefTwo }} {...{name, value, onChange: () => {return console.log('changed')}}} />
            <button onClick={handleClick}>Focus Child Input</button>
        </div>
    );
};

export default Blah;


const Child: React.FC<any> = React.forwardRef((props: Props, ref: any) => {

    // console.log('ref', ref);
    // console.log('props', props);

    return (
        <Box>
            <Typography variant="h6">Child Component</Typography>
            <input type="text" {...props} ref={ref?.ref1} />
            <span ref={ref?.ref2} ></span>
        </Box>
    );
})