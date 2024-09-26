import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Box, Skeleton, Typography } from '@mui/material';
const LazyMyComp: any = React.lazy(() => delayForDemo(import('./MyComp')));
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    return (
        <div>
            <h1>Hello</h1>
            <ErrorBoundary fallback={<h1>Error</h1>}>
                <React.Suspense fallback={<h2>Still loading, omg omg omg</h2>}>
                    <LazyMyComp />
                </React.Suspense>
            </ErrorBoundary>
        </div>
    );
};

export default Blah;

function delayForDemo(component: any) {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    }).then(() => {
        return component;
    });
}
