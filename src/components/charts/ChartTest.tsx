import React from 'react';
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

type Props = {};

const ChartTest = (props: Props) => {
    //

    React.useEffect(() => {
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

        function rgba2hex(orig: string) {
            var a,
                isPercent,
                rgb: any = orig
                    .replace(/\s/g, '')
                    .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
                alpha = ((rgb && rgb[4]) || '').trim(),
                hex = rgb
                    ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
                      (rgb[2] | (1 << 8)).toString(16).slice(1) +
                      (rgb[3] | (1 << 8)).toString(16).slice(1)
                    : orig;

            if (alpha !== '') {
                a = alpha;
            } else {
                a = 1;
            }
            // multiply before convert to HEX
            a = ((a * 255) | (1 << 8)).toString(16).slice(1);
            hex = hex + a;

            return `#${hex}`;
        }

        // FUNCTIONS

        function onClickEvent(arg: any) {
            console.log('arg', arg);
        }

        function colorFromValue(value: any, border?: any) {
            var alpha = (1 + Math.log(value)) / 5;
            var color = 'blue';
            if (border) {
                alpha += 0.01;
            }
            // console.log(
            //     'colorCreation',
            //     WindowChart.helpers.color(color).alpha(alpha).rgbString()
            // );
            return rgba2hex(
                WindowChart.helpers.color(color).alpha(alpha).rgbString()
            );
        }

        var ctx = (document as any)
            ?.getElementById('chart-area')
            ?.getContext('2d');

        let finalTree = [
            { value: 100, title: `Alpha: ${100}` },
            { value: 20, title: `Beta: ${20}` },
            { value: 15, title: `Roma: ${15}` },
            { value: 10, title: `Yoma: ${10}` },
            { value: 5, title: `Gamma: ${5}` },
            { value: 4, title: `Lama: ${4}` },
            { value: 2, title: `Delta: ${2}` },
        ];

        // let finalTree = [
        //     { value: 100, title: `Alpha` },
        //     { value: 20, title: `Beta` },
        //     { value: 15, title: `Roma` },
        //     { value: 10, title: `Yoma` },
        //     { value: 5, title: `Gamma` },
        //     { value: 4, title: `Lama` },
        //     { value: 2, title: `Delta` },
        // ];

        let total = finalTree.reduce((acc, el) => {
            acc += el.value;
            return acc;
        }, 0);

        // let colorArr = [
        //     RM_COLOR_BASE_BLUE_DARK_80,
        //     RM_COLOR_BASE_BLUE_DARK_50,
        //     RM_COLOR_BASE_BLUE_DARK_30,
        //     RM_COLOR_BASE_BLUE_DARK_20,
        //     RM_COLOR_BASE_BLUE_MIDDLE,
        //     RM_COLOR_BASE_BLUE_LIGHT_20,
        //     RM_COLOR_BASE_BLUE_LIGHT_30,
        //     RM_COLOR_BASE_BLUE_LIGHT_50,
        //     RM_COLOR_BASE_BLUE_LIGHT_80,
        // ];

        let colorArr = finalTree.map(
            (el) => `rgba(0, 128, 0, ${el.value / total})`
        );

        //
        (window as any).chart1 = new WindowChart(ctx, {
            type: 'treemap',
            data: {
                datasets: [
                    {
                        label: 'Sample with labels',
                        tree: finalTree,
                        key: 'value', // * this uses the KEY from the TREE array
                        groups: ['title'], // * this displays the Middle text, I can add more than 1.
                        backgroundColor: function (ctx: any) {
                            let item = ctx.dataset.data[ctx.dataIndex];
                            if (!item) {
                                return;
                            }

                            let color: string = colorFromValue(
                                Number(
                                    ctx.dataset.data[ctx.dataIndex]._data.value
                                )
                            );

                            let idx = ctx.dataset.tree.indexOf(
                                ctx.dataset.data[ctx.dataIndex]._data
                                    .children[0]
                            );

                            // console.log(
                            //     'title: ',
                            //     ctx.dataset.data[ctx.dataIndex].g
                            // );
                            // console.log(
                            //     'value',
                            //     Number(
                            //         ctx.dataset.data[ctx.dataIndex]._data.value
                            //     )
                            // );
                            // console.log('idx', idx);
                            // console.log('color', color);
                            // console.log('color typeof', typeof color);
                            // console.log('============================');

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
                onClick: onClickEvent,
                maintainAspectRatio: false,
                title: {
                    display: false,
                    text: 'Basic treemap sample',
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    // TOOL TIP IS HERE
                    callbacks: {
                        title: function (item: any, data: any) {
                            // console.log('item', item[0]);
                            // console.log('data', data);
                            // console.log('item', item[0].index); // here I have item INDEX that I hover over
                            return `This is item: ${item[0].index}`;
                        },
                        label: function (item: any, data: any) {
                            var dataset = data.datasets[item.datasetIndex];
                            var dataItem = dataset.data[item.index];
                            return dataItem.v; // this here is the Value
                        },
                    },
                },
            },
        });
    });

    return (
        <div
            className='canvas-holder'
            style={{ width: '100%', margin: 'auto' }}
        >
            <canvas id='chart-area' width='800' height='400'></canvas>
        </div>
    );
};

export default ChartTest;
