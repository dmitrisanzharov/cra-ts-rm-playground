import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0);

    const myObj1 = React.useMemo(()=> ({}), []);

    React.useEffect(() => {
        console.log('re-rendering');
        setCount(count + 1);
    }, [myObj1]);

    return <div>
        <h1>Hello</h1>
    </div>;
};

export default Blah;

