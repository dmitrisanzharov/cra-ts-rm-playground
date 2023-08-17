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
import { DoughnutChartDataType } from "src/components/RmDoughnutChart/RmDoughnutChart";
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

function generateDoughnutChartTooltip(
    label: string,
    value: number,
    href: string,
    color: string
) {
    //
    return `<div style="
    background-color: ${RM_COLOR_BASE_WHITE};
    font-family: ${RM_TYPOGRAPHY_FONT_FAMILY_SANS};
    font-size: ${RM_SIZE_FONT_SMALL};
    padding: 2px 4px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    ">
    <div style="
    color: ${RM_COLOR_BASE_BLACK};
    display: flex;
    flex-direction: row;
    align-items: center;
    ">
    <div style="
    display: flex;
    width: 12px;
    height: 12px;
    border: 1px solid ${RM_COLOR_BASE_GRAY_LIGHT_30};
    border-radius: 50%;
    background-color: ${color};
    margin-right: 4px;
    "></div>
    <div style="
    display: flex;
    flex: 1;
    ">
    ${label}
    </div>
    </div>
    <div style="color: ${RM_COLOR_BASE_GRAY_LIGHT_30};">${value}</div>
    ${
        href
            ? `<a href='${href}' target="_blank" rel="noreferrer" style="
    color: ${RM_COLOR_BUTTON_PRIMARY_ENABLED_FOREGROUND};
    background-color: ${RM_COLOR_BUTTON_PRIMARY_ENABLED_BACKGROUND};
    padding: 4px 8px;
    text-decoration: none;
    border-radius: 4px;
    display: flex;
    flex: 1;
    text-wrap: nowrap;
    ">See More</a>`
            : ""
    }
    </div>
    `;
}

// export const useUtilizationStatusDoughnutChartDataHrefsOnly = (): string[] => {
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

export const useUtilizationStatusDoughnutChartDataHrefsOnly = (): string[] => {
    return ["https://www.google.com"];
};

export const useUtilizationStatusDoughnutChartData = ({
    statusOnRent,
    statusAvailable,
    statusNRM,
    statusOther,
}: UtilzationStatusInterface) => {
    const { hash } = window.location;
    // const urlParamName = getUrlParamName(FLEET_TABLE_ID, null, "status");

    // const { t } = useTranslation();
    const { t } = translation;
    const ONRENT_translation = t["ONRENT"];
    const AVAILABLE_translation = t["AVAILABLE"];
    const NRM_translation = t["NRM"];
    const OTHER_translation = t["OTHER"];

    return React.useMemo(() => {
        const [, queryString] = hash.split("?") || ["", ""];
        const query = new URLSearchParams(queryString);
        query.delete("urlParamName");

        const outputData: DoughnutChartDataType = {
            chartName: "Utilization Status",
            chartMetric: "Vehicle Count",
            values: [
                [
                    ONRENT_translation,

                    statusOnRent,
                    generateDoughnutChartTooltip(
                        ONRENT_translation,
                        statusOnRent,
                        "https://www.google.com",
                        // `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":false,"other":false,"onRent":true,"available":false%7D`,
                        DATA_COLOUR_STATUS_ONRENT
                    ),
                ],
                [
                    AVAILABLE_translation,
                    statusAvailable,
                    generateDoughnutChartTooltip(
                        AVAILABLE_translation,
                        statusAvailable,
                        "https://www.google.com",
                        // `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":false,"other":false,"onRent":false,"available":true%7D`,
                        DATA_COLOUR_STATUS_AVAILABLE
                    ),
                ],
                [
                    NRM_translation,
                    statusNRM,
                    generateDoughnutChartTooltip(
                        NRM_translation,
                        statusNRM,
                        "https://www.google.com",
                        // `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":true,"other":false,"onRent":false,"available":false%7D`,
                        DATA_COLOUR_STATUS_NRM
                    ),
                ],
                [
                    OTHER_translation,
                    statusOther,
                    generateDoughnutChartTooltip(
                        OTHER_translation,
                        statusOther,
                        "https://www.google.com",
                        // `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":false,"other":true,"onRent":false,"available":false%7D`,
                        DATA_COLOUR_STATUS_UNKNOWN
                    ),
                ],
            ],
        };

        return outputData;
    }, [
        hash,
        // urlParamName,
        statusAvailable,
        statusOnRent,
        statusNRM,
        statusOther,
        t,
    ]);
};
