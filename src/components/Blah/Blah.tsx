import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { ErrorBoundary } from "react-error-boundary";
// @ts-ignore
const ChildLazy: any = React.lazy(()=> delayForDemo(import('./Child')))

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    return <div>
        <h1>Hello main</h1>
        <ErrorBoundary fallback={<h2>error omfg</h2>}>
            <React.Suspense fallback={<h2>still loading</h2>}>
                <ChildLazy />
            </React.Suspense>
        </ErrorBoundary>
    </div>;
};


const Child: any = () => {
    throw new Error('there was error, call the cops');
}

export default Blah;

function delayForDemo(component: any) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => {
        return component;
    });
  }
