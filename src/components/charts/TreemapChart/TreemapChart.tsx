import React from 'react';
import { Box, BoxProps, Skeleton, SkeletonProps } from '@mui/material';
import { SelectableTreemapCardProps } from 'src/components/cards/SelectableTreemapCard/SelectableTreemapCard';

const TreemapChartSkeleton: React.FC<SkeletonProps> = ({
    variant = 'rectangular',
    ...rest
}) => (
    <Box {...rest}>
        <Skeleton
            variant={variant}
            sx={{ height: '40vh', width: '100%', borderRadius: '5px' }}
            // className='dbb'
        />
    </Box>
);

interface TreemapChartProps extends BoxProps {
    loading: boolean;
    data: { [label: string]: number };
}

const TreemapChart: React.FC<TreemapChartProps> = ({
    loading,
    data,
    ...rest
}) => {
    //
    const chartRef = React.useRef<null>(null);

    React.useEffect(() => {
        console.log('data', data);
    }, [loading, data]);

    return (
        <Box {...rest}>
            {loading && <TreemapChartSkeleton />}
            {!loading && (
                <>
                    {/* <canvas ref={chartRef}>Hello World</canvas> */}
                    <div className='canvas-holder'>
                        <canvas
                            id='chart-area'
                            width='800'
                            height='400'
                        ></canvas>
                    </div>
                </>
            )}
        </Box>
    );
};
export default TreemapChart;
