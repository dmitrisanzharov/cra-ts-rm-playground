import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "./Blah.css";

type Props = {};

const Blah = (props: Props) => {
    return (
        <div
            style={{
                minHeight: "500px",
                width: "500px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
            }}
            className='drr'
        >
            <h1>Hello</h1>
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: "30px",
                }}
                className='dbb'
            >
                <h2>Headign 2</h2>
                <div style={{ flex: 1 }} className='drr'></div>
                <h2>Headign 2</h2>
            </div>
            {/* <div>Hello</div> */}
        </div>
    );
};

export default Blah;
