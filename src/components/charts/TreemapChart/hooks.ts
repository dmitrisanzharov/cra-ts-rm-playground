import React from 'react';
import { ApiData, TreeMapDataFormat, DataItemsAsArray } from './types';
import {
    RM_COLOR_BASE_WHITE,
    RM_TYPOGRAPHY_FONT_FAMILY_SANS,
    RM_SIZE_FONT_LABEL_LARGE,
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

const TREEMAP_FONT_SIZE = Number(RM_SIZE_FONT_LABEL_LARGE.split(/r/)[0]) * 16;

const treeMapColorArr: string[] = [
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

export function destroyTreeMapCdnAndChart() {
    (window as any).chart1?.destroy();
    if (document.getElementById('treeMapScript')) {
        document.head.removeChild(
            document.getElementById('treeMapScript') as any
        );
    }
}

export const useReformatDataForTreeMap = (
    data: ApiData
): TreeMapDataFormat[] => {
    return React.useMemo(() => {
        return Object.entries(data)
            .sort((a: DataItemsAsArray, b: DataItemsAsArray) => b[1] - a[1])
            .map(([label, value]: DataItemsAsArray) => {
                return {
                    label: `${label}: ${value}`,
                    value: value,
                };
            })
            .slice(0, 8);
    }, [data]);
};

export const useDrawTreeMapChart = (
    data: any,
    loading: boolean,
    chartLabel: string,
    reformatDataForTreeMap: any,
    // states
    chartIsDrawn: boolean,
    dummyReloadState: number,
    setChartIsDrawn: (value: boolean) => void,
    setChartNotLoadingError: (value: boolean) => void,
    setDummyReloadState: (value: number) => void,
    chartRef: any
) => {
    return React.useEffect(() => {
        //
        console.log('dummyReloadState', dummyReloadState);
        const timeOut = setTimeout(() => {
            if (chartIsDrawn) {
                return;
            }

            let WindowChart = (window as any).Chart;
            let ctx = chartRef?.current?.getContext('2d');
            let chartTreeMapLoadedIntoChartJs = (window as any).Chart.defaults
                .treemap;

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

                                return treeMapColorArr[idx];
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
                        console.log('item index clicked', arr[0]._index),
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
                                const dataset =
                                    data.datasets[item.datasetIndex];
                                const dataItem = dataset.data[item.index];
                                return dataItem.v;
                            },
                        },
                    },
                },
            });

            setChartIsDrawn(true);
        }, 0);

        return () => clearTimeout(timeOut);
    }, [
        data,
        loading,
        chartIsDrawn,
        dummyReloadState,
        reformatDataForTreeMap,
        setChartIsDrawn,
        setChartNotLoadingError,
        setDummyReloadState,
        chartLabel,
    ]);
};
