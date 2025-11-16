import React from "react";
import ReactGA from "react-ga4";

// MUI
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

type Props = any;


ReactGA.initialize("G-3B58WKHYG4");

const GaTest: React.FC<any> = (props: Props) => {
    const handleClick = () => {
        console.log("clicked");
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "My Special Button"
        });
    };

    const handleClick2 = () => {
        console.log("clicked 2");
        ReactGA.event({
            category: "Button 2",
            action: "Click2",
            label: "Special Button 2"
        });
    };

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClick2}>Click me 2</button>
        </div>
    );
};

export default GaTest;
