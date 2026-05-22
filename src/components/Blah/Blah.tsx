import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import ReactGA from "react-ga4";

type Props = any;

// G-8897TXN49S
ReactGA.initialize("G-8897TXN49S");


const Blah: React.FC<any> = (props: Props) => {

    return <div>
        <h1>Hello</h1>
        <button onClick={() => ReactGA.event({ category: 'My Category', action: 'Clicked Button', label: 'Click me button' })}>
            Click me
        </button>
    </div>;
};

export default Blah;
