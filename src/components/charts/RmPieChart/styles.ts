import { SxProps } from "@mui/material";

export const pieContainerSx: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    aspectRatio: '1 / 1',
    justifyContent: 'flex-start',
    my: 2
};

export const skeletonSx: SxProps = {
    aspectRatio: '1 / 1',
    flex: 1,
    display: 'flex',
    m: 2,
    mt: 0
};
