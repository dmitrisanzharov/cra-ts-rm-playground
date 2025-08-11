import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
// @ts-ignore

type Props = any;

// SX
const containerSx: any = {
    border: "10px solid black",
    padding: "5px",
    margin: "10px",

    display: "flex",
    // justifyContent: 'flex-start',
    flexDirection: "column",
    // flexWrap: 'wrap',
    // justifyContent: "space-evenly",

    height: "90vh",
    // alignItems: 'start',
    // alignContent: 'start'
};

const boxSx: any = {
    width: '150px',
    height: '150px',
    // fontSize: "8rem",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
};

const Blah: React.FC<any> = (props: Props) => {
    return (
        <Box sx={containerSx}>
            <Box sx={{ ...boxSx, backgroundColor: "red" }}>1</Box>
            <Box sx={{ ...boxSx, backgroundColor: "yellow" }}>2</Box>
            {/* <Box sx={{ ...boxSx, backgroundColor: "green" }}>3</Box>
            <Box sx={{ ...boxSx, backgroundColor: "blue" }}>4</Box> */}
            {/*  */}
            {/* <Box sx={{ ...boxSx, backgroundColor: "red" }}>1</Box>
            <Box sx={{ ...boxSx, backgroundColor: "yellow" }}>2</Box>
            <Box sx={{ ...boxSx, backgroundColor: "green" }}>3</Box>
            <Box sx={{ ...boxSx, backgroundColor: "blue" }}>4</Box> */}
            {/*  */}
            {/* <Box sx={{ ...boxSx, backgroundColor: "red" }}>1</Box>
            <Box sx={{ ...boxSx, backgroundColor: "yellow" }}>2</Box>
            <Box sx={{ ...boxSx, backgroundColor: "green" }}>3</Box>
            <Box sx={{ ...boxSx, backgroundColor: "blue" }}>4</Box> */}
        </Box>
    );
};

export default Blah;
