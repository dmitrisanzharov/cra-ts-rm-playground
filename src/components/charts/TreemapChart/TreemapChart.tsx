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
    <Box {...rest}>
        <Skeleton
            sx={{ display: 'grid', marginTop: '-49px', height: '100%' }}
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
            {loading && (
                <TreemapChartSkeleton
                    sx={{
                        width: '100%',
                    }}
                    className='drr'
                />
            )}
            {!loading && (
                <>
                    <h1>Hello World</h1>
                </>
            )}
        </Box>
    );
};
export default TreemapChart;
