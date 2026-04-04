import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Child: React.FC<Props> = (props: Props) => {
    console.log('Child rendered', props.count);

    return (
        <div>
            <h1>Child</h1>
        </div>
    );
};


function areEqual(prevProps: Props, nextProps: Props) {
    console.log('Comparing props:', prevProps, nextProps);
    // Perform a shallow comparison of props
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}


const ChildMemo = React.memo(Child, areEqual);

const Blah: React.FC<any> = (props: Props) => {
    console.log('Blah rendered');

    const [count, setCount] = React.useState(0);

    

    return (
        <div>
            <h1>Hello</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <ChildMemo count={count}/>
            {/* <ChildMemo /> */}
        </div>
    );
};

export default Blah;




