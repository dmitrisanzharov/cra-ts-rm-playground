import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import "./Blah.css";

type Props = {};

const Blah = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <Box
                    sx={{
                        height: "500px",
                        width: "400px",
                        display: "flex",
                        flexDirection: "column",
                        // overflow: "visible",
                    }}
                    className='drr'
                >
                    <h1>Test</h1>
                    <h1>Test2</h1>
                    <Box sx={{ height: "100%" }} className='dbb'></Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Blah;
