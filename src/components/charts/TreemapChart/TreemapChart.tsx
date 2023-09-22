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
    RM_COLOR_BASE_BLUE_MIDDLE,
    RM_COLOR_BASE_BLUE_LIGHT_20,
    RM_COLOR_BASE_BLUE_LIGHT_30,
    RM_COLOR_BASE_BLUE_LIGHT_50,
    RM_COLOR_BASE_BLUE_LIGHT_80,
    RM_COLOR_BASE_BLUE_DARK_20,
    RM_COLOR_BASE_BLUE_DARK_30,
    RM_COLOR_BASE_BLUE_DARK_50,
    RM_COLOR_BASE_BLUE_DARK_80,
    RM_COLOR_BASE_WHITE,
    RM_TYPOGRAPHY_FONT_FAMILY_SANS,
    RM_SIZE_FONT_LABEL_LARGE,
} from 'src/design-tokens/tokens';
import {
    destroyTreeMapCdnAndChart,
    loadTheTreeMapCDNScript,
    useReformatDataForTreeMap,
} from './hooks';

const TREEMAP_HEIGHT = '525px';
const TREEMAP_FONT_SIZE = Number(RM_SIZE_FONT_LABEL_LARGE.split(/r/)[0]) * 16;

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
    const [chartIsDrawn, setChartIsDrawn] = React.useState(false);
    const [dummyReloadState, setDummyReloadState] = React.useState(0);
    const [chartNotLoadingError, setChartNotLoadingError] =
        React.useState(false);

    const colorArr = React.useMemo(
        () => [
            RM_COLOR_BASE_BLUE_DARK_80,
            RM_COLOR_BASE_BLUE_DARK_50,
            RM_COLOR_BASE_BLUE_DARK_30,
            RM_COLOR_BASE_BLUE_DARK_20,
            RM_COLOR_BASE_BLUE_MIDDLE,
            RM_COLOR_BASE_BLUE_LIGHT_20,
            RM_COLOR_BASE_BLUE_LIGHT_30,
            RM_COLOR_BASE_BLUE_LIGHT_50,
            RM_COLOR_BASE_BLUE_LIGHT_80,
        ],
        []
    );

    const reformatDataForTreeMap = useReformatDataForTreeMap(data);

    React.useEffect(() => {
        if (chartIsDrawn) {
            return;
        }

        loadTheTreeMapCDNScript();

        let WindowChart = (window as any).Chart;
        let ctx = chartRef?.current?.getContext('2d');
        let chartTreeMapLoadedIntoChartJs= (window as any).Chart.defaults.treemap;

        // * Wait for Chart Treemap to LOAD into the Window object (it takes few re-renders)
        if (!chartTreeMapLoadedIntoChartJs || !ctx) {
            // * need to stop INFINITE loop in case Chart CDN does NOT load for some reason
            if (dummyReloadState >= 100) {
                setChartNotLoadingError(true);
                setChartIsDrawn(true);
            }

            setDummyReloadState(dummyReloadState + 1);
            return;
        }

        // * Draw the chart if all is good
        (window as any).chart1 = new WindowChart(ctx, {
            type: 'treemap',
            data: {
                datasets: [
                    {
                        label: chartLabel,
                        tree: reformatDataForTreeMap,
                        key: 'value',
                        groups: ['label'],
                        backgroundColor: function (ctx: any) {
                            let item = ctx.dataset.data[ctx.dataIndex];

                            if (!item) {
                                return;
                            }

                            const idx = ctx.dataset.tree.indexOf(
                                ctx.dataset.data[ctx.dataIndex]._data
                                    .children[0]
                            );

                            return colorArr[idx];
                        },
                        fontColor: RM_COLOR_BASE_WHITE,
                        fontFamily: RM_TYPOGRAPHY_FONT_FAMILY_SANS,
                        fontSize: TREEMAP_FONT_SIZE,
                        spacing: 1,
                        borderWidth: 3,
                    },
                ],
            },
            options: {
                onClick: (el: any, arr: any) =>
                    console.log(
                        'item index clicked',
                        linksArray[arr[0]._index]
                    ),
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                tooltips: {
                    callbacks: {
                        title: function (item: any, data: any) {
                            return `Item index is: ${item[0].index}`;
                        },
                        label: function (item: any, data: any) {
                            const dataset = data.datasets[item.datasetIndex];
                            const dataItem = dataset.data[item.index];
                            return dataItem.v;
                        },
                    },
                },
            },
        });

        setChartIsDrawn(true);
    }, [
        data,
        loading,
        chartIsDrawn,
        colorArr,
        dummyReloadState,
        reformatDataForTreeMap,
        linksArray,
        chartLabel
    ]);

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
                        ref={chartRef}
                        id='chart-area'
                        width='100%'
                        height='100%'
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
