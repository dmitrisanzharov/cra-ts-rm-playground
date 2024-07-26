import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    
    // const [count, setCount] = React.useState(0);



    const [myObj, setmyObj] = React.useState({start: 1, end: 10});

    React.useEffect(() => {
        console.log('triggered');
    }, [myObj]);

    return <div>
        {/* <h1>Count: {count}</h1>
        <hr /> */}
        <h1>Start {JSON.stringify(myObj)}</h1>
        <button onClick={()=> setmyObj({...myObj, start: myObj.start + 1})}>change</button>
    </div>;
};

export default Blah;
