import React from "react";
import ReactGA from "react-ga4";

// MUI
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

type Props = any;


ReactGA.initialize("G-2W2DYGZ5V6");

type GAEventParams = Parameters<typeof ReactGA.event>[1];

const gaEventClick: GAEventParams = {
    category: "Button",
    action: "Click",
    label: "My Special Button"
}

const GaTest: React.FC<any> = (props: Props) => {
    const handleClick = () => {
        console.log("clicked");
        ReactGA.event(gaEventClick);
    };

    const handleClick2 = () => {
        console.log("clicked 2");
        ReactGA.event({
            category: "Button 2",
            action: "Click2",
            label: "Special Button 2"
        });
    };

    const handleClick3 = () => {
        console.log("clicked 3");
        ReactGA.event({
            category: "Button 3",
            action: "Click3",
            label: "Special Button 3"
        });
    };

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClick2}>Click me 2</button>
            <button onClick={handleClick3}>Click me 3</button>
        </div>
    );
};

export default GaTest;
