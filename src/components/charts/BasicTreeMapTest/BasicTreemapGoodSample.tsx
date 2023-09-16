import React from 'react';

type Props = {};

const BasicTreemapGoodSample = (props: Props) => {
    //

    let dummyData = [
        { value: 100, title: `Alpha: ${100}` },
        { value: 20, title: `Beta: ${20}` },
        { value: 15, title: `Roma: ${15}` },
        { value: 10, title: `Yoma: ${10}` },
        { value: 5, title: `Gamma: ${5}` },
        { value: 4, title: `Lama: ${4}` },
        { value: 2, title: `Delta: ${2}` },
    ];

    const total = dummyData.reduce((acc, el) => {
        acc += el.value;
        return acc;
    }, 0);

    const colorArr = dummyData.map(
        (el) => `rgba(0, 128, 0, ${el.value / total})`
    );

    const [chartIsDrawn, setChartIsDrawn] = React.useState(false);

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
                        tree: dummyData,
                        key: 'value',
                        groups: ['title'],
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
                    text: 'Basic treemap sample',
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
        <div
            className='canvas-holder'
            style={{ width: '100%', margin: 'auto' }}
        >
            <canvas id='chart-area' width='800' height='400'></canvas>
        </div>
    );
};

export default BasicTreemapGoodSample;
