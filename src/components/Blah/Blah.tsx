import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import googleTagManager from '../../utils/googleTagManager';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const { push: sendToGTM } = googleTagManager(window);


    function testGtm(){
        console.log('started')
        sendToGTM({
            event: 'victor_test_event',
            category: 'victor_tests',
            action: 'click me button has been clicked',
            label: 'any label',
            value: 20,
            anythingElse: 'omg is this working'
        })
        console.log('gtm even should be in RM')
    }

    return <div>
        <h1>Hello</h1>
        <button onClick={testGtm}>click me</button>
    </div>;
};

export default Blah;
