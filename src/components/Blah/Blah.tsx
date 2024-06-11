import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { ErrorBoundary } from "react-error-boundary";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    return <div>
        <h1>Hello main</h1>
        <ErrorBoundary fallback={<h2>error omfg</h2>}>
            <Child />
        </ErrorBoundary>
    </div>;
};


const Child: any = () => {
    throw new Error('there was error, call the cops');
}

export default Blah;
