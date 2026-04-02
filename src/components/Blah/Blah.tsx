import React, { Suspense, useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
const MyLazyChild = React.lazy(() => delayForDemo(import('./MyLazyChild')));
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {


    let a = delayForDemo('omg');

    React.useEffect(() => {
        console.log('a', a);
    }, [a]);


    return (
        <div>
            <h1>Hello</h1>
            <ErrorBoundary
                FallbackComponent={() => (
                    <div>
                        <Typography variant='h6' color='error'>
                            An error occurred in the Child component.
                        </Typography>
                    </div>
                )}
            >
                <Suspense
                    fallback={
                        <Box sx={{ width: '80%', pl: 3 }}>
                            <Skeleton variant='rectangular' width='100%' height={118} />
                        </Box>
                    }
                >
                    <MyLazyChild />
                </Suspense>
                <Child />
            </ErrorBoundary>
        </div>
    );
};

export default Blah;

const Child: React.FC<any> = () => {
    // useEffect(() => {
    //     throw new Error('Error in Child component');
    // }, []);

    return <div>Child Component</div>;
};

function delayForDemo(component: any) {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    }).then(() => {
        return component;
    });
}
