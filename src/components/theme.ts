// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import { createTheme } from '@mui/material/styles';
import * as tokens from 'src/design-tokens/tokens';
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//
// import { createTheme } from "@mui/material/styles";
// import * as tokens from "design-tokens";

export const theme = createTheme({
    palette: {
        common: {
            white: tokens.RM_COLOR_BASE_WHITE,
        },
        primary: {
            main: tokens.RM_COLOR_BASE_GRAY_MIDDLE,
            light: tokens.RM_COLOR_BASE_GRAY_LIGHT_30,
        },
        secondary: {
            main: tokens.RM_COLOR_BASE_YELLOW_MIDDLE,
            light: tokens.RM_COLOR_BASE_YELLOW_LIGHT_30,
        },
        info: {
            main: tokens.RM_COLOR_BASE_BLUE_MIDDLE,
            light: tokens.RM_COLOR_BASE_BLUE_LIGHT_30,
        },
        error: {
            main: tokens.RM_COLOR_BASE_RED,
        },
        success: {
            main: tokens.RM_COLOR_BASE_GREEN,
        },
        text: {
            primary: tokens.RM_COLOR_BASE_GRAY_DARK_50,
            secondary: tokens.RM_COLOR_BASE_GRAY_DARK_20,
            disabled: tokens.RM_COLOR_BASE_GRAY_LIGHT_50,
        },
    },
    typography: {
        fontFamily: tokens.RM_TYPOGRAPHY_FONT_FAMILY_SANS,
        fontWeightBold: tokens.RM_WEIGHT_FONT_BOLD,
        fontWeightMedium: tokens.RM_WEIGHT_FONT_MEDIUM,
        fontWeightRegular: tokens.RM_WEIGHT_FONT_REGULAR,
        body1: {
            fontFamily: tokens.RM_TYPOGRAPHY_FONT_FAMILY_SANS,
            fontWeight: tokens.RM_WEIGHT_FONT_REGULAR,
            fontSize: `${tokens.RM_SIZE_FONT_MEDIUM}rem`,
            lineHeight: tokens.RM_LINE_HEIGHT_FONT_LARGE,
        },
        body2: {
            fontFamily: tokens.RM_TYPOGRAPHY_FONT_FAMILY_SANS,
            fontWeight: tokens.RM_WEIGHT_FONT_REGULAR,
            fontSize: `${tokens.RM_SIZE_FONT_BODY_MEDIUM}rem`,
            lineHeight: tokens.RM_LINE_HEIGHT_FONT_BODY_MEDIUM,
        },
        h1: {
            fontFamily: tokens.RM_TYPOGRAPHY_FONT_FAMILY_SANS,
        },
        h2: {
            fontFamily: tokens.RM_TYPOGRAPHY_FONT_FAMILY_SANS,
        },
        h3: {
            fontFamily: tokens.RM_TYPOGRAPHY_FONT_FAMILY_SANS,
        },
        h4: {
            fontFamily: tokens.RM_TYPOGRAPHY_FONT_FAMILY_SANS,
        },
        h5: {
            fontFamily: tokens.RM_TYPOGRAPHY_FONT_FAMILY_SANS,
        },
        h6: {
            fontFamily: tokens.RM_TYPOGRAPHY_FONT_FAMILY_SANS,
        },
    },
    zIndex: {
        mobileStepper: tokens.RM_ZINDEX_DROPDOWN,
        fab: tokens.RM_ZINDEX_STICKY,
        speedDial: tokens.RM_ZINDEX_STICKY,
        appBar: tokens.RM_ZINDEX_FIXED,
        drawer: tokens.RM_ZINDEX_OFFCANVAS,
        modal: tokens.RM_ZINDEX_MODAL,
        tooltip: tokens.RM_ZINDEX_TOOLTIP,
        snackbar: tokens.RM_ZINDEX_TOAST,
    },
});
