import { SxProps } from '@mui/material';

export const gridContainer: SxProps = {
    width: '100%',
    display: 'grid',
    gap: 1,
    minHeight: '75vh',
    gridTemplateColumns: {
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
        xl: 'repeat(5, 1fr)',
    },
    // * please do NOT delete this one, might need in the future, used to be 'fit-content(55vh)'
    gridAutoRows: 'fit-content()',
};

export const utilizationCardSx: SxProps = {
    gridColumn: {
        xs: 1,
        sm: '1 / 3',
        md: '1 / 3',
        lg: '1 / 3',
        xl: '1 / 3',
    },
};

export const nrmBreakdownCardSx: SxProps = {
    gridColumn: {
        xs: 1,
        sm: '1 / 2',
        md: '3 / 5',
        lg: '3 / 5',
        xl: '3 / 5',
    },
};

export const deviceStatusCardSx: SxProps = {
    gridColumn: {
        xs: 1,
        sm: '2 / 3',
        md: 'auto',
        lg: 'auto',
        xl: '5 / 6',
    },
    gridRow: {
        md: 'auto',
        lg: '2 / 3',
        xl: 'auto',
    },
};

export const deviceIssuesCardSx: SxProps = {
    gridColumn: {
        md: 'auto',
        lg: '1 / 3',
    },
};

export const anomalyCardSx: SxProps = {
    gridColumn: {
        md: 'auto',
        lg: '2 / 3',
        xl: '1 / 3',
    },
    gridRow: {
        md: 'auto',
        lg: '2 / 3',
        xl: '2 / ',
    },
};

export const treemapCardSx: SxProps = {
    gridColumn: {
        xs: 1,
        sm: '1 / 3',
        md: '1 / 4',
        lg: '3 / 5',
        xl: '3 / 6',
    },
    gridRow: {
        xs: '6 / 8',
        sm: '4 / 5',
        md: '3 / 4',
        lg: '2 / 4',
        xl: '2 / 4',
    },
};
