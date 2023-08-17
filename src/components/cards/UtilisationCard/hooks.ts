import React from "react";
// @ts-ignore
// import { getUrlParamName } from "@reactRootOld/hooks/filterUrlBindings";
// @ts-ignore
// import { TABLE_ID as FLEET_TABLE_ID } from "@reactRootOld/pages/FleetPage/FleetPage";
// @ts-ignore
// import { useTranslation } from "@hooks/translation";
// @ts-ignore
// import {
//     RM_COLOR_BASE_GRAY_LIGHT_30,
//     RM_COLOR_BASE_BLACK,
//     RM_COLOR_BASE_WHITE,
//     RM_COLOR_BUTTON_PRIMARY_ENABLED_BACKGROUND,
//     RM_COLOR_BUTTON_PRIMARY_ENABLED_FOREGROUND,
//     RM_TYPOGRAPHY_FONT_FAMILY_SANS,
//     RM_SIZE_FONT_SMALL,
// } from "design-tokens";
// @ts-ignore
// import { DoughnutChartDataType } from "@reactRootOld/display/Chart/RmDoughnutChart/RmDoughnutChart.tsx";
import {
    DATA_COLOUR_STATUS_ONRENT,
    DATA_COLOUR_STATUS_AVAILABLE,
    DATA_COLOUR_STATUS_NRM,
    DATA_COLOUR_STATUS_UNKNOWN,
} from "./UtilizationCard";
//
// * --------  VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import { DoughnutChartDataType } from "src/components/charts/RmDoughnutChart/RmDoughnutChart";
import translation from "src/translation";
import {
    RM_COLOR_BASE_GRAY_LIGHT_30,
    RM_COLOR_BASE_BLACK,
    RM_COLOR_BASE_WHITE,
    RM_COLOR_BUTTON_PRIMARY_ENABLED_BACKGROUND,
    RM_COLOR_BUTTON_PRIMARY_ENABLED_FOREGROUND,
    RM_TYPOGRAPHY_FONT_FAMILY_SANS,
    RM_SIZE_FONT_SMALL,
} from "src/design-tokens/tokens";
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------

interface UtilzationStatusInterface {
    statusOnRent: number;
    statusAvailable: number;
    statusNRM: number;
    statusOther: number;
}

// export const useUtilizationStatusDoughnutChartHrefs = (): string[] => {
//     const { hash } = window.location;
//     const urlParamName = getUrlParamName(FLEET_TABLE_ID, null, "status");

//     return React.useMemo(() => {
//         const [, queryString] = hash.split("?") || ["", ""];
//         const query = new URLSearchParams(queryString);
//         query.delete("urlParamName");

//         const progressLineHrefs: string[] = [
//             `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":false,"other":false,"onRent":true,"available":false%7D`,
//             `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":false,"other":false,"onRent":false,"available":true%7D`,
//             `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":true,"other":false,"onRent":false,"available":false%7D`,
//             `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":false,"other":true,"onRent":false,"available":false%7D`,
//         ];
//         return progressLineHrefs;
//     }, [hash, urlParamName]);
// };

export const useUtilizationStatusDoughnutChartHrefs = (): string[] => {
    return [
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
    ];
};
