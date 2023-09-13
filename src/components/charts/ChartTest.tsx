import React from 'react';
import * as M from '@mui/material';
import { statsByState } from './data';

type Props = {};

const ChartTest = (props: Props) => {
    const [chartHasBeenDrawn, setChartHasBeenDrawn] = React.useState(false);

    React.useEffect(() => {
        console.log(window);
        let WindowChart = (window as any).Chart;

        function colorFromValue(value: any, border: any) {
            var alpha = (1 + Math.log(value)) / 5;
            var color = 'blue';
            if (border) {
                alpha += 0.01;
            }
            return WindowChart.helpers.color(color).alpha(alpha).rgbString();
        }

        var ctx = (document as any)
            ?.getElementById('chart-area')
            ?.getContext('2d');

        (window as any).chart1 = new WindowChart(ctx, {
            type: 'treemap',
            data: {
                datasets: [
                    {
                        label: 'Sample',
                        data: [100, 20, 6, 6, 5, 4, 3, 2, 2, 1],
                        backgroundColor: function (ctx) {
                            return colorFromValue(
                                ctx.dataset.data[ctx.dataIndex].v
                            );
                        },
                        borderColor: function (ctx) {
                            return colorFromValue(
                                ctx.dataset.data[ctx.dataIndex].v,
                                true
                            );
                        },
                        spacing: 0.1,
                        borderWidth: 2,
                        borderColor: 'rgba(180,180,180, 0.15)',
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Basic treemap sample',
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    callbacks: {
                        title: function (item, data) {
                            return '';
                        },
                        label: function (item, data) {
                            var dataset = data.datasets[item.datasetIndex];
                            var dataItem = dataset.data[item.index];
                            return dataItem.v;
                        },
                    },
                },
            },
        });
    });

    return (
        <div
            className='canvas-holder'
            style={{ width: '90vw', margin: 'auto' }}
        >
            <canvas id='chart-area' width='800' height='400'></canvas>
        </div>
    );
};

export default ChartTest;
