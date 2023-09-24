import React from 'react';
import {
    Box,
    BoxProps,
    Skeleton,
    SkeletonProps,
    Typography,
} from '@mui/material';
import { t } from 'src/translation/index';

import {
    destroyTreeMapCdnAndChart,
    useReformatDataForTreeMap,
    useDrawTreeMapChart,
} from './hooks';

const TREEMAP_HEIGHT = '525px';

const TreemapChartSkeleton: React.FC<SkeletonProps> = ({
    variant = 'rectangular',
    ...rest
}) => (
    <Box {...rest}>
        <Skeleton
            variant={variant}
            sx={{
                height: TREEMAP_HEIGHT,
                width: '100%',
                borderRadius: '5px',
            }}
        />
    </Box>
);

interface TreemapChartProps extends BoxProps {
    loading: boolean;
    data: { [label: string]: number };
    linksArray: string[];
    chartLabel: string;
}

const TreemapChart: React.FC<TreemapChartProps> = ({
    loading,
    data,
    linksArray,
    chartLabel,
    ...rest
}) => {
    //
    const chartRef = React.useRef<any>(null);
    const [chartIsDrawn, setChartIsDrawn] = React.useState<boolean>(false);
    const [dummyReloadState, setDummyReloadState] = React.useState<number>(0);
    const [chartNotLoadingError, setChartNotLoadingError] =
        React.useState<boolean>(false);

    const reformatDataForTreeMap = useReformatDataForTreeMap(data);

    useDrawTreeMapChart(
        data,
        loading,
        chartLabel,
        reformatDataForTreeMap,
        chartIsDrawn,
        dummyReloadState,
        setChartIsDrawn,
        setChartNotLoadingError,
        setDummyReloadState,
        chartRef
    );

    React.useEffect(() => {
        // * when we trigger the Select Dropdown, we need to destroy the OLD chart and recreate a new one, otherwise it bugs a bit
        (window as any).chart1?.destroy();
        setChartIsDrawn(false);
    }, [data]);

    React.useEffect(() => {
        // * remove chart and CDN when component is UNMOUNTED
        return () => destroyTreeMapCdnAndChart();
    }, []);

    return (
        <Box {...rest}>
            {loading && <TreemapChartSkeleton />}
            {!loading && !chartNotLoadingError && (
                <Box
                    sx={{
                        pt: 2,
                        cursor: 'pointer',
                        height: TREEMAP_HEIGHT,
                    }}
                >
                    <canvas
                        id='chart-area'
                        width='100%'
                        height='100%'
                        ref={chartRef}
                    ></canvas>
                </Box>
            )}
            {!loading && chartNotLoadingError && (
                <Typography variant='body1' component='div'>
                    {t('ERROR_PLEASE_TRY_AGAIN')}
                </Typography>
            )}
        </Box>
    );
};
export default TreemapChart;
