import { SxProps } from "@mui/material";

export const gridContainer: SxProps = {
    width: "100%",
    display: "grid",
    gap: 1,
    minHeight: "75vh",
    gridTemplateColumns: {
        xs: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
        xl: "repeat(5, 1fr)",
    },
    gridAutoRows: "fit-content(55vh)",
};

export const utilizationCardSx: SxProps = {
    gridColumn: {
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
    },
};

export const nrmBreakdownCardSx: SxProps = {
    gridColumn: {
        xs: 1,
        sm: 1,
        md: "3 / 4",
        lg: "3 / 5",
        xl: "3 / 5",
    },
};

export const deviceIssuesCardSx: SxProps = {
    gridColumn: {
        md: "auto",
        lg: "1 / 3",
    },
};

export const anomalyCardSx: SxProps = {
    gridColumn: {
        md: "auto",
        lg: "1 / 3",
        xl: "1 / 3",
    },
};

export const treemapCardSx: SxProps = {
    gridColumn: {
        xs: 1,
        sm: "1 / 3",
        md: "1 / 4",
        lg: "3 / 5",
        xl: "3 / 6",
    },
    gridRow: {
        xs: "6 / 8",
        sm: "4 / 5",
        md: "3 / 4",
        lg: "2 / 4",
        xl: "2 / 4",
    },
};
