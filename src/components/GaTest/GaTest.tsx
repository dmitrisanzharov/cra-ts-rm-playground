import React from "react";
import ReactGA from "react-ga4";

// MUI
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

type Props = any;

ReactGA.initialize("G-XXXXXXXXXX");

const GaTest: React.FC<any> = (props: Props) => {
    const handleClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "My Special Button"
        });
    };

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default GaTest;
