import React from 'react';
import '../chartDefaults';
import { Box, BoxProps, Skeleton, SkeletonProps, SxProps } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { pieContainerSx, skeletonSx } from './styles';
import { useProvisionPieChart } from './RmPieChart.hooks';




export type PieChartData = {
    chartName: string,
    chartMetric: string,
    data: {
        labels: string[],
        values: number[],
        colors: string[],
        links?: string[]
    },
};

interface RmPieChartProps extends BoxProps {
    loading: boolean,
    chartData: PieChartData,
};

const PieChartSkeleton: React.FC<SkeletonProps> = ({ variant = 'circular', ...rest }) => (
    <>
        <Skeleton
            sx={skeletonSx}
            variant={variant}
            {...rest}
        />
        <Skeleton width="100%" sx={{ mt: -2 }} />
        <Skeleton width="50%" sx={{ mt: 1 }} />
    </>

);


const RmPieChart: React.FC<RmPieChartProps> = ({ chartData, loading, sx, ...rest }) => {

    const { data, PieChartActions } = useProvisionPieChart(chartData);

    return (
        <Box
            sx={{
                ...pieContainerSx,
                ...sx
            } as SxProps
            }
            component="div"
            {...rest}
        >
            {loading && <PieChartSkeleton />}
            {!loading && (<Pie data={data} options={PieChartActions} />)}
        </Box>
    );
};

export default RmPieChart;