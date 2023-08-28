import React from 'react';
import { PieChartData } from './RmPieChart';

export const useProvisionPieChart = (chartData: PieChartData) => {
    const links = chartData.data.links || [];
    const data = React.useMemo(
        () => ({
            labels: chartData.data.labels,
            datasets: [
                {
                    label: chartData.chartName,
                    data: chartData.data.values,
                    backgroundColor: chartData.data.colors,
                },
            ],
        }),
        [chartData]
    );

    const PieChartActions = React.useMemo(
        () => ({
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: true, position: 'bottom', usePointStyle: true },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 16,
                },
            },
            ...(links.length
                ? {
                      onClick: (evt: any, element: any) => {
                          if (element.length > 0) {
                              const ind = element[0]._index as number;
                              const link = links[ind] || null;
                              if (link) {
                                  window.open(link, '_blank');
                              }
                          }
                      },
                      onHover: (event: any, chartElement: unknown[]) => {
                          // ts-expect-error
                          event.target.style.cursor = chartElement[0]
                              ? 'pointer'
                              : 'default';
                      },
                  }
                : {}),
        }),
        [links.join(',')]
    );

    return { data, PieChartActions };
};

export default { useProvisionPieChart };
