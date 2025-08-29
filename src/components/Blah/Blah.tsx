import React, { useMemo } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { MainContextConst } from 'src/components/context';
import { Context3Const } from 'src/components/context3/Context3';
import Context4, { Context4Const } from 'src/components/Context4';
// @ts-ignore 

type Props = any;

const Blah: React.FC<any> = (props: Props) => {



    return <div>
        <h1>Hello</h1>
        <Context4>
            <Child1 />
        </Context4>
    </div>;
};

export default Blah;


const Child1 = (props: any) => {

    const valueIn4 = React.useContext(Context4Const) as any;
    console.log("valueIn3 child: ", valueIn4);

    return <div>
        <h1>Child1</h1>
    </div>;
}

const Child2 = () => {

    return <div>
        <h1>Child2</h1>
    </div>;
}
