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
    total: number;
    data: { [label: string]: number };
}

const TreemapChart: React.FC<TreemapChartProps> = ({
    total,
    loading,
    data,
    ...rest
}) => {
    //
    const [chartIsDrawn, setChartIsDrawn] = React.useState(false);

    const reformatedDataForTreeMap: { label: string; value: number }[] =
        React.useMemo(() => {
            console.log('============================');
            return Object.entries(data).map(
                ([label, value]: [string, number]) => {
                    return { label, value };
                }
            );
        }, [data]);

    const colorArr: string[] = React.useMemo(() => {
        return Object.values(data).map(
            (el: number) => `rgba(0, 0, 255, ${el / total}`
        );
    }, [data, total]);

    // React.useEffect(() => {
    //     console.log('data', data);
    //     console.log('reformatted', reformatedDataForTreeMap);
    // }, [loading, data, reformatedDataForTreeMap]);

    React.useEffect(() => {
        // * if chart is drawn exit
        if (chartIsDrawn) {
            return;
        }

        // * CHART CODE

        var jQueryScript = document.createElement('script');
        jQueryScript.setAttribute(
            'src',
            'https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@0.2.3'
        );
        document.head.appendChild(jQueryScript);

        // * Wait for Chart Treemap to LOAD into the Window object (it takes few re-renders)
        if (!(window as any).Chart.defaults.treemap) {
            return;
        }

        // * Draw the chart
        let WindowChart = (window as any).Chart;

        var ctx = (document as any)
            ?.getElementById('chart-area')
            ?.getContext('2d');

        //
        (window as any).chart1 = new WindowChart(ctx, {
            type: 'treemap',
            data: {
                datasets: [
                    {
                        label: 'Sample with labels',
                        tree: reformatedDataForTreeMap,
                        key: 'value',
                        groups: ['label'],
                        backgroundColor: function (ctx: any) {
                            let item = ctx.dataset.data[ctx.dataIndex];

                            if (!item) {
                                return;
                            }

                            let idx = ctx.dataset.tree.indexOf(
                                ctx.dataset.data[ctx.dataIndex]._data
                                    .children[0]
                            );

                            return colorArr[idx];
                        },
                        fontColor: 'black',
                        fontWeight: 600,
                        fontFamily: 'Roboto',
                        fontSize: 30,
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
                            var dataset = data.datasets[item.datasetIndex];
                            var dataItem = dataset.data[item.index];
                            return dataItem.v;
                        },
                    },
                },
            },
        });

        // * finalise Draw of the chart
        setChartIsDrawn(true);
    });

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
