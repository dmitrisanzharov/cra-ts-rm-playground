import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { ErrorBoundary } from "react-error-boundary";
const MyChildLazy = React.lazy(() => delayForDemo(import('./MyChild')));
// @ts-ignore

type Props = any;

let delayConst = 2000;

const Blah: React.FC<any> = (props: Props) => {

    return <div>
        <h1>Hello</h1>
        <ErrorBoundary FallbackComponent={() => <Box sx={{ color: "red" }}>Error occurred in the child, omg</Box>}>
            <React.Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />}>
                <MyChildLazy />
            </React.Suspense>
        </ErrorBoundary>
    </div>;
};

export default Blah;


// async function myDelay() {
//     return new Promise((resolve) => setTimeout(resolve, delayConst));
// }


// const MyChild = () => {

//     return <h1>Child</h1>
// }

function delayForDemo(component: any) {
    return new Promise(resolve => {
        setTimeout(resolve, delayConst);
    }).then(() => {
        return component;
    });
}
