import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import ReactGA from "react-ga4";
// @ts-ignore

type Props = any;

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_STREAM as string);
type GAEventParams = Parameters<typeof ReactGA.event>[1];


const Blah: React.FC<any> = (props: Props) => {

    const gaObj: GAEventParams = {
        category: "button",
        action: "click_5-Dec-2025",
        label: 'label_5-Dec-2025_click',
        // value: 5,
        // non_interaction: true
    };

    function handleClick(){
        ReactGA.event(gaObj);
    }

    return <div>
        <h1>Hello</h1>
        <button onClick={handleClick}>click</button>
    </div>;
};

export default Blah;
