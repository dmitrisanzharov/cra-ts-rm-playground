import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import ReactGA from "react-ga4";

ReactGA.initialize("G-2W2DYGZ5V6");
type GAEventParams = Parameters<typeof ReactGA.event>[1];

type Props = any;


const Blah: React.FC<any> = (props: Props) => {

    const handleClick = () => {
        console.log("Button clicked");
        ReactGA.event({
            category: "User",
            action: "click on 19-Nov-2025",
            label: "Blah Component Button"
        } as GAEventParams);
    }

    return <div>
        <h3>Hello</h3>
        <button onClick={handleClick} >Click Me</button>
    </div>;
};

export default Blah;
