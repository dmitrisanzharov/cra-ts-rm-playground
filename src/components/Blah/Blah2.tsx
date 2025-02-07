import React from "react";
import { Box } from "@mui/material";

type Props = {};

const Blah2 = (props: Props) => {
	return (
		<Box sx={{ margin: 2 }}>
			<Box sx={{display: 'flex', gap: 1, padding: 1}}>
				{[1, 2, 3].map((i) => {
					return (
						<Box key={i} sx={{ backgroundColor: "lightgray", height: 100, width: 150 }}>
							{i}
						</Box>
					);
				})}
			</Box>
            <Box className='' sx={{display: 'flex', gap: 1, padding: 1}}>
                <Box sx={{ height: 300, flex: 2, backgroundColor: "lightgray"}}>util</Box>
                <Box sx={{ height: 300, flex: 2, backgroundColor: "lightgray"}}>util</Box>
                <Box sx={{ height: 300, flex: 1, backgroundColor: "lightgray"}}>util</Box>
            </Box>
            <Box className='' sx={{display: 'flex', gap: 1, padding: 1}}>
                <Box sx={{ height: 300, flex: 2, backgroundColor: "lightgray"}}>util</Box>
                <Box sx={{ height: 300, flex: 3, backgroundColor: "lightgray"}}>util</Box>
            </Box>
            <Box className='' sx={{display: 'flex', gap: 1, padding: 1}}>
                <Box sx={{ height: 300, flex: 2, backgroundColor: "lightgray"}}>util</Box>
                <Box sx={{ height: 300, flex: 3, backgroundColor: "lightgray"}}>util</Box>
            </Box>
		</Box>
	);
};

export default Blah2;
