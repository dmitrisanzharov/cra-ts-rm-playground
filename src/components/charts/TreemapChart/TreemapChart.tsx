import React from 'react';
import { Box, BoxProps, Skeleton, SkeletonProps } from '@mui/material';
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
} from 'src/design-tokens/tokens';

const TreemapChartSkeleton: React.FC<SkeletonProps> = ({
    variant = 'rectangular',
    ...rest
}) => (
    <Box {...rest}>
        <Skeleton
            variant={variant}
            sx={{ height: '40vh', width: '100%', borderRadius: '5px' }}
        />
    </Box>
);

interface TreemapChartProps extends BoxProps {
    loading: boolean;
    total: number;
    data: { [label: string]: number };
}

type TreeMapDataItemType = { label: string; value: number };

function loadTheCDN() {
    const windowScript = document.createElement('script');
    windowScript.setAttribute(
        'src',
        'https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@0.2.3'
    );
    document.head.appendChild(windowScript);
}

const TreemapChart: React.FC<TreemapChartProps> = ({
    total,
    loading,
    data,
    ...rest
}) => {
    //
    const BLUE_60 = '#02377E';
    const colorArr = [
        RM_COLOR_BASE_BLUE_DARK_80,
        RM_COLOR_BASE_BLUE_DARK_50,
        RM_COLOR_BASE_BLUE_DARK_30,
        RM_COLOR_BASE_BLUE_DARK_20,
        RM_COLOR_BASE_BLUE_MIDDLE,
        RM_COLOR_BASE_BLUE_LIGHT_20,
        RM_COLOR_BASE_BLUE_LIGHT_30,
        RM_COLOR_BASE_BLUE_LIGHT_50,
        RM_COLOR_BASE_BLUE_LIGHT_80,
    ];

    const [chartIsDrawn, setChartIsDrawn] = React.useState(false);
    const [reloadState, setReloadState] = React.useState(0);

    const reformatDataForTreeMap: {
        label: string;
        value: number;
    }[] = React.useMemo(() => {
        return Object.entries(data)
            .sort((a: any, b: any) => b[1] - a[1])
            .map(([label, value]: [string, number]) => {
                return { label: `${label}: ${value}`, value };
            })
            .slice(0, 8);
    }, [data]);

    React.useLayoutEffect(() => {
        if (chartIsDrawn) {
            return;
        }
        // * may not be necessary, but just as a precaution
        loadTheCDN();
    });

    React.useEffect(() => {
        if (chartIsDrawn) {
            return;
        }

        loadTheCDN();

        let WindowChart = (window as any).Chart;
        let chartTreeMapState = (window as any).Chart.defaults.treemap;

        // * Wait for Chart Treemap to LOAD into the Window object (it takes few re-renders)
        if (!chartTreeMapState) {
            setReloadState(reloadState + 1);
            return;
        }

        // * Draw the chart
        var ctx = (document as any)
            ?.getElementById('chart-area')
            ?.getContext('2d');

        (window as any).chart1 = new WindowChart(ctx, {
            type: 'treemap',
            data: {
                datasets: [
                    {
                        label: 'Available Vehicles',
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
                        fontColor: 'white',
                        fontFamily: 'Roboto',
                        fontSize: 20,
                        spacing: 1,
                        borderWidth: 3,
                    },
                ],
            },
            options: {
                onClick: (el: any, arr: any) =>
                    console.log('item index clicked', arr[0]._index),
                maintainAspectRatio: false,
                title: {
                    display: false,
                    text: 'Available Vehicles',
                },
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
    });

    React.useEffect(() => {
        // * when we trigger the Select Dropdown, we need to destroy the OLD chart and recreate a new one, otherwise it bugs a bit
        (window as any).chart1?.destroy();
        setChartIsDrawn(false);
    }, [data]);

    return (
        <Box {...rest}>
            {loading && <TreemapChartSkeleton />}
            {!loading && (
                <Box sx={{ pt: 2, cursor: 'pointer' }}>
                    <canvas
                        id='chart-area'
                        width='100%'
                        height='400px'
                    ></canvas>
                </Box>
            )}
        </Box>
    );
};
export default TreemapChart;
