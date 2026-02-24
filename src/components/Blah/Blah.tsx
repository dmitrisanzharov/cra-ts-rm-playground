import React, { useEffect } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import ReactGA from "react-ga4";
// @ts-ignore

ReactGA.initialize("G-S6D8QK20JQ");
type GAEventParams = Parameters<typeof ReactGA.event>[1];

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    function trackEvent() {
        console.log("event tracked");
        ReactGA.event({
            category: "Category_Button",
            action: "action_click_24-Feb-2026",
            label: "label_24-Feb-2026",
        } as GAEventParams);
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={trackEvent}>Track Event</button>
        </div>
    );
};

export default Blah;
