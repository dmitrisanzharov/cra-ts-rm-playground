import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const useMyHook = (arg: any) => {
    const [count, setCount] = React.useState(0);

    function myFunction(){
        setCount(count+1)
    }

    React.useMemo(()=> console.log('myArg', arg), [arg]);

    return {count, myFunction}
}

const Blah: React.FC<any> = (props: Props) => {


    const {count, myFunction} = useMyHook(2);

    const troll = useMyHook(3)

    return <div>
        <h1>Hello {troll.count}</h1>
        <h1>{count}</h1>
        <button onClick={myFunction}>inc</button>
    </div>;
};

export default Blah;


function slowFunction(num: any){
    console.log('Calling slow function');
    for(let i = 0; i <= 1000000000; i++){}
    return num * 2;
   }