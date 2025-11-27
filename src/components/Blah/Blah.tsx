import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import ReactGA from 'react-ga4';
// @ts-ignore

type Props = any;

ReactGA.initialize('G-2W2DYGZ5V6');

type GAEventParams = Parameters<typeof ReactGA.event>[1];

const Blah: React.FC<any> = (props: Props) => {
    function handleClick() {
        ReactGA.event({
            category: 'button',
            action: 'click on 27-Nov-2025',
            label: 'label on 27-Nov-2025'
        } as GAEventParams);
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleClick}>send GA</button>
        </div>
    );
};

export default Blah;
