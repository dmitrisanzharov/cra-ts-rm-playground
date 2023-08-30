import { SxProps, styled } from '@mui/material';

export const RM_COLOR_BASE_GRAY_LIGHT_90 = '#e8eaed';

export const CenterTextContainerSx: SxProps = {
    position: 'absolute',
    borderRadius: '50%',
    width: '50%',
    height: 'auto',
    aspectRatio: '1 / 1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

export const ProgressLinesContainer = styled('section')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`;

export const ProgressLinesMetricContainer = styled('div')`
    display: flex;
    height: 32px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    width: 100%;
`;

export const ProgressLinesTitle = styled('div')`
    flex: 1 0 0;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const ProgressLinesTrack = styled('div')`
    position: relative;
    width: 100%;
    flex-shrink: 0;
    border-radius: 50px;
    background: ${RM_COLOR_BASE_GRAY_LIGHT_90};
`;

export const ProgressLinesTrackIndicator = styled('div')`
    position: absolute;
    left: 0;
    top: 0;
    flex-shrink: 0;
    border-radius: 50px;
`;
