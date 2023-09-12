import React from 'react';
import {
    Box,
    BoxProps,
    Skeleton,
    SkeletonProps,
    SxProps,
    CardProps,
} from '@mui/material';
import { SelectableTreemapCardProps } from 'src/components/cards/SelectableTreemapCard/SelectableTreemapCard';

const TreemapChartSkeleton: React.FC<SkeletonProps> = ({ ...rest }) => (
    <Box
        sx={{
            flex: 1,
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'flex-start',
            // height: '40vh',
        }}
        className='drr'
    >
        <Skeleton
            sx={
                {
                    // display: 'flex',
                    // flex: 1,
                    // height: '60%',
                }
            }
            className='dbb'
        />
    </Box>
);

type TreemapChartProps = SelectableTreemapCardProps & BoxProps;

const TreemapChart: React.FC<TreemapChartProps> = ({
    numberOfRecords,
    loading,
    allData,
    ...rest
}) => {
    return (
        <Box {...rest}>
            {loading && <TreemapChartSkeleton />}
            {!loading && (
                <>
                    <h1>Hello World</h1>
                </>
            )}
        </Box>
    );
};
export default TreemapChart;
