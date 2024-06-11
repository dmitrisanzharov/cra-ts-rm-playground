import { createTheme, colors } from '@mui/material';


const myTheme = createTheme({
    palette: {
        primary: {
            main: colors.red[600],
            light: colors.blue[300]
        }
    },
    customVar: { // this is a CUSTOM VALUE that can be accessed via useTheme hook
        varYellow: colors.yellow[800]
    }
} as any);

export default myTheme;