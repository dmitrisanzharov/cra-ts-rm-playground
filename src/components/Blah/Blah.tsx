import React from "react";
import { Box, Skeleton, Typography, ThemeProvider } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import myTheme from "src/components/Blah/myTheme";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    console.log('myTheme', myTheme);

	return (
		<ThemeProvider theme={myTheme}>
			<div>hello badge</div>
			<Box sx={{ padding: 5 }}>
				<h1>main</h1>
				<Badge badgeContent={4} color="primary">
					<MailIcon color="action" />
				</Badge>
			</Box>
            <Box sx={{ backgroundColor: 'primary.light'}}>test</Box>
            <hr />
            <Child />
		</ThemeProvider>
	);
};

const Child: any = () => {

    const themeHook: any = useTheme();


    return (
        <Box sx={{color: (myTheme as any).customVar.varGreen}}>
            <h1>child</h1>
        </Box>
    )
}

export default Blah;
