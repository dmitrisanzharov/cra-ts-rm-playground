import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { ErrorBoundary } from "react-error-boundary";
const ChildComponent: any = React.lazy(() => delayForDemo(import('./MyChild')));
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    return <div style={{padding: 10}}>
        <h1>This is parent</h1>
        <ErrorBoundary fallback={<h2>MF error biatch</h2>}>
        <React.Suspense fallback={<h2>Loading...</h2>}>
            <ChildComponent />
        </React.Suspense>
        </ErrorBoundary>

    </div>;
};


const Comp1: any = (props: any) => {
    return <div>
        <h2>this is comp2</h2>
    </div>
}

export default Blah;

function delayForDemo(component: any) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => {
        return component;
    });
  }
