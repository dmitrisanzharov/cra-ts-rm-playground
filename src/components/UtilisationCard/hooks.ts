// TODO:

// import {
//     RM_COLOR_BASE_GRAY_LIGHT_30,
//     RM_COLOR_BASE_BLACK,
//     RM_COLOR_BASE_WHITE,
//     RM_COLOR_BUTTON_PRIMARY_ENABLED_BACKGROUND,
//     RM_COLOR_BUTTON_PRIMARY_ENABLED_FOREGROUND,
//     RM_TYPOGRAPHY_FONT_FAMILY_SANS,
//     RM_SIZE_FONT_SMALL,
// } from "design-tokens";

// import { getUrlParamName } from "@reactRootOld/hooks/filterUrlBindings";
// import { TABLE_ID as FLEET_TABLE_ID } from "@reactRootOld/pages/FleetPage/FleetPage";
// import {
//     RM_COLOR_BASE_GRAY_MIDDLE,
//     RM_COLOR_BASE_GREEN,
//     RM_COLOR_BASE_ORANGE,
//     RM_COLOR_BASE_RED,
//     RM_COLOR_BUTTON_PRIMARY_DISABLED_FOREGROUND,
// } from "design-tokens";
// import { useTranslation } from "@hooks/translation";
// import { generatePieChartTooltip } from "@reactRootOld/display/Chart/hooks";
// import { DeviceStatus } from "./types";

import React from "react";
import { DoughnutChartDataType } from "../RmDoughnutChart/RmDoughnutChart"; // TODO: this should come from main component
import { UtilizationCardPropsInterface } from "./UtilizationCard";

export const utilizationStatusDoughnutChartDataHrefOnly = (
    idx: number
): string => {
    return [
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
    ][idx];
};

export const useUtilizationStatusDoughnutChartData = (
    utilzationStatus: UtilizationCardPropsInterface
) => {
    // TODO: const { t } = useTranslation();

    //TODO: const { hash } = window.location;
    // TODO: const urlParamName = getUrlParamName(FLEET_TABLE_ID, null, "ts_status");

    return React.useMemo(() => {
        // const [, queryString] = hash.split("?") || ["", ""];
        // const query = new URLSearchParams(queryString);
        // query.delete("urlParamName");
        const outputData: DoughnutChartDataType = {
            chartName: "Utilization Status",
            chartMetric: "Vehicle Count",
            values: [
                [
                    "On Rent", // t("ACTIVE"),
                    utilzationStatus.statusOnRent,
                    generatePieChartTooltip(
                        "On Rent",
                        // t("ACTIVE"),
                        utilzationStatus.statusOnRent,
                        // `#/fleet?${query.toString()}&${urlParamName}=Active`,
                        // RM_COLOR_BASE_GREEN,
                        "https://www.google.com",
                        "green"
                    ),
                ],
                [
                    // t("LABEL_ISSUE"),
                    // deviceStatus.issue,
                    // generatePieChartTooltip(
                    //     t("LABEL_ISSUE"),
                    //     deviceStatus.issue,
                    //     `#/fleet?${query.toString()}&${urlParamName}=Issue`,
                    //     RM_COLOR_BASE_ORANGE
                    // ),
                    "Available",
                    utilzationStatus.statusAvailable,
                    generatePieChartTooltip(
                        "Available",
                        utilzationStatus.statusAvailable,
                        "https://www.google.com",
                        "blue"
                    ),
                ],
                [
                    // t("TS_UNAUTH_DISC"),
                    // deviceStatus.disconnect,
                    // generatePieChartTooltip(
                    //     t("TS_UNAUTH_DISC"),
                    //     deviceStatus.disconnect,
                    //     `#/fleet?${query.toString()}&${urlParamName}=Disconnect`,
                    //     RM_COLOR_BASE_RED
                    // ),
                    "Nrm",
                    utilzationStatus.statusNRM,
                    generatePieChartTooltip(
                        "Nrm",
                        utilzationStatus.statusNRM,
                        "https://www.google.com",
                        "violet"
                    ),
                ],
                [
                    // t("LABEL_OTHER"),
                    // deviceStatus.other,
                    // generatePieChartTooltip(
                    //     t("LABEL_NO_TRACKER"),
                    //     deviceStatus.untracked,
                    //     null,
                    //     RM_COLOR_BASE_GRAY_MIDDLE
                    // ),
                    "Other",
                    utilzationStatus.statusOther,
                    generatePieChartTooltip(
                        "Other",
                        utilzationStatus.statusOther,
                        "https://www.google.com",
                        "gray"
                    ),
                ],
            ],
        };

        return outputData;
    }, [
        // deviceStatus.active,
        // deviceStatus.disconnect,
        // deviceStatus.untracked,
        // deviceStatus.issue,
        // hash,
        // urlParamName,
        // t,
        // t("ACTIVE"),
        utilzationStatus,
    ]);
};

function generatePieChartTooltip(
    label: string,
    value: number,
    href: string,
    color: string
) {
    const RM_COLOR_BASE_GRAY_LIGHT_30 = "gray";
    const RM_COLOR_BASE_BLACK = "black";
    const RM_COLOR_BASE_WHITE = "white";
    const RM_COLOR_BUTTON_PRIMARY_ENABLED_BACKGROUND = "#575756";
    const RM_COLOR_BUTTON_PRIMARY_ENABLED_FOREGROUND = "white";
    const RM_TYPOGRAPHY_FONT_FAMILY_SANS = "Roboto";
    const RM_SIZE_FONT_SMALL = "0.75rem";

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
                    ? `<a href="${href}" target="_blank" style="
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

export default generatePieChartTooltip;
