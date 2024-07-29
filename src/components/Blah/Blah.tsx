import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
import Child1 from './Child1'

type Props = any;

export const BlahContext = React.createContext<any>({});



const Blah: React.FC<any> = (props: Props) => {

    const colorAsProps = 'red';


    const colorAsContext = {color: 'green', name: 'foo'};

    return <div>
        <h1>Hello</h1>
        <hr />
        <BlahContext.Provider value={colorAsContext}>
         <Child1 color={colorAsProps}/>
        </BlahContext.Provider>
       
    </div>;
};

export default Blah;
