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
