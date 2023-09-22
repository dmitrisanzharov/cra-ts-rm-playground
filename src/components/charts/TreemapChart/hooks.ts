import React from 'react';
import {ApiData, TreeMapDataFormat, DataItemsAsArray} from './types';


export function destroyTreeMapCdnAndChart() {
    (window as any).chart1?.destroy();
    if (document.getElementById('treeMapScript')) {
        document.head.removeChild(
            document.getElementById('treeMapScript') as any
        );
    }
}

export function loadTheTreeMapCDNScript() {
    const treeMapScriptExistsInWindow =
        document.getElementById('treeMapScript');

    if (treeMapScriptExistsInWindow) {
        return;
    }

    const addTreeMapScriptToWindow = document.createElement('script');
    addTreeMapScriptToWindow.setAttribute(
        'src',
        'https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@0.2.3'
    );
    addTreeMapScriptToWindow.setAttribute('id', 'treeMapScript');
    document.head.appendChild(addTreeMapScriptToWindow);
}

export const useReformatDataForTreeMap = (data: ApiData): TreeMapDataFormat[] => {
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


