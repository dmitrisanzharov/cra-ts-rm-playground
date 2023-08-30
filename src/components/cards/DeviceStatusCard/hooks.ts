// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import React, { useMemo } from 'react';
import {
    RM_COLOR_BASE_GRAY_MIDDLE,
    RM_COLOR_BASE_GREEN,
    RM_COLOR_BASE_ORANGE,
    RM_COLOR_BASE_RED,
} from 'src/design-tokens/tokens';
import { PieChartData } from 'src/components/charts/RmPieChart/RmPieChart';
import { t } from 'src/translation';
import { DeviceStatus } from './types';
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//
// import React, { useMemo } from 'react';
// import { getUrlParamName } from '@reactRootOld/hooks/filterUrlBindings';
// import { TABLE_ID as FLEET_TABLE_ID } from '@reactRootOld/pages/FleetPage/FleetPage';
// import {
//     RM_COLOR_BASE_GRAY_MIDDLE,
//     RM_COLOR_BASE_GREEN,
//     RM_COLOR_BASE_ORANGE,
//     RM_COLOR_BASE_RED,
// } from 'design-tokens';
// import { PieChartData } from '@reactRootOld/display/Chart/RmPieChart/RmPieChart';
// import { useTranslation } from '@hooks/translation';
// import { DeviceStatus } from './types';

// export const useDeviceStatusPieChartData = (deviceStatus: DeviceStatus) => {
//     const { t } = useTranslation();

//     const { hash } = window.location;
//     const urlParamName = getUrlParamName(FLEET_TABLE_ID, null, 'ts_status');
//     return useMemo(() => {
//         const [, queryString] = hash.split('?') || ['', ''];
//         const query = new URLSearchParams(queryString);
//         query.delete('urlParamName');
//         const outputData: PieChartData = {
//             chartName: t('LABEL_DEVICE_STATUS'),
//             chartMetric: t('CHECKIN_LABEL_VEHICLE_COUNT'),
//             data: {
//                 labels: [
//                     t('ACTIVE'),
//                     t('LABEL_ISSUE'),
//                     t('TS_UNAUTH_DISC'),
//                     t('LABEL_NO_TRACKER'),
//                 ],
//                 values: [
//                     deviceStatus.active,
//                     deviceStatus.issue,
//                     deviceStatus.disconnect,
//                     deviceStatus.untracked,
//                 ],
//                 colors: [
//                     RM_COLOR_BASE_GREEN,
//                     RM_COLOR_BASE_ORANGE,
//                     RM_COLOR_BASE_RED,
//                     RM_COLOR_BASE_GRAY_MIDDLE,
//                 ],
//                 links: [
//                     `#/fleet?${query.toString()}&${urlParamName}=Active`,
//                     `#/fleet?${query.toString()}&${urlParamName}=Issue`,
//                     `#/fleet?${query.toString()}&${urlParamName}=Disconnect`,
//                     `#/fleet?${query.toString()}&${urlParamName}=No+Tracker`,
//                 ],
//             },
//         };
//         return outputData;
//     }, [
//         deviceStatus.active,
//         deviceStatus.disconnect,
//         deviceStatus.untracked,
//         deviceStatus.issue,
//         hash,
//         t,
//         t('ACTIVE'),
//         urlParamName,
//     ]);
// };

export const useDeviceStatusPieChartData = (deviceStatus: DeviceStatus) => {
    return useMemo(() => {
        const outputData: PieChartData = {
            chartName: t('LABEL_DEVICE_STATUS'),
            chartMetric: t('CHECKIN_LABEL_VEHICLE_COUNT'),
            data: {
                labels: [
                    t('ACTIVE'),
                    t('LABEL_ISSUE'),
                    t('TS_UNAUTH_DISC'),
                    t('LABEL_NO_TRACKER'),
                ],
                values: [
                    deviceStatus.active,
                    deviceStatus.issue,
                    deviceStatus.disconnect,
                    deviceStatus.untracked,
                ],
                colors: [
                    RM_COLOR_BASE_GREEN,
                    RM_COLOR_BASE_ORANGE,
                    RM_COLOR_BASE_RED,
                    RM_COLOR_BASE_GRAY_MIDDLE,
                ],
                links: [
                    `www.google.com`,
                    `www.google.com`,
                    `www.google.com`,
                    `www.google.com`,
                ],
            },
        };
        return outputData;
    }, [
        deviceStatus.active,
        deviceStatus.disconnect,
        deviceStatus.untracked,
        deviceStatus.issue,
        t,
        t('ACTIVE'),
    ]);
};

export default { useDeviceStatusPieChartData };
