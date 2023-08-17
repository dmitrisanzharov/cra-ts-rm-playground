// import React, { useMemo } from 'react';
// import { getUrlParamName } from '@reactRootOld/hooks/filterUrlBindings';
// import { TABLE_ID as FLEET_TABLE_ID } from '@reactRootOld/pages/FleetPage/FleetPage';
// import { RM_COLOR_BASE_GRAY_MIDDLE, RM_COLOR_BASE_GREEN, RM_COLOR_BASE_ORANGE, RM_COLOR_BASE_RED, RM_COLOR_BUTTON_PRIMARY_DISABLED_FOREGROUND } from "design-tokens";
// import { PieChartData } from '@reactRootOld/display/Chart/RmPieChart/RmPieChart';
// import { useTranslation } from '@hooks/translation';
// import { generatePieChartTooltip } from '@reactRootOld/display/Chart/hooks';
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
//             chartName: 'Device Status',
//             chartMetric: 'Vehicle Count',
//             values: [
//                 [t('ACTIVE'), deviceStatus.active, generatePieChartTooltip(t('ACTIVE'), deviceStatus.active, `#/fleet?${query.toString()}&${urlParamName}=Active`, RM_COLOR_BASE_GREEN)],
//                 [t('LABEL_ISSUE'), deviceStatus.issue, generatePieChartTooltip(t('LABEL_ISSUE'), deviceStatus.issue, `#/fleet?${query.toString()}&${urlParamName}=Issue`, RM_COLOR_BASE_ORANGE)],
//                 [t('TS_UNAUTH_DISC'), deviceStatus.disconnect, generatePieChartTooltip(t('TS_UNAUTH_DISC'), deviceStatus.disconnect, `#/fleet?${query.toString()}&${urlParamName}=Disconnect`, RM_COLOR_BASE_RED)],
//                 [t('LABEL_NO_TRACKER'), deviceStatus.untracked, generatePieChartTooltip(t('LABEL_NO_TRACKER'), deviceStatus.untracked, `#/fleet?${query.toString()}&${urlParamName}No+Tracker`, RM_COLOR_BUTTON_PRIMARY_DISABLED_FOREGROUND)],
//                 [t('LABEL_OTHER'), deviceStatus.other, generatePieChartTooltip(t('LABEL_NO_TRACKER'), deviceStatus.untracked, null, RM_COLOR_BASE_GRAY_MIDDLE)]
//             ]
//         };
//         return outputData;
//     }, [
//         deviceStatus.active, deviceStatus.disconnect, deviceStatus.untracked, deviceStatus.issue, hash, urlParamName, t, t('ACTIVE')
//     ]);
// };

// export default { useDeviceStatusPieChartData };
export default {};
