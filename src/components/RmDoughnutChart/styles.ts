import { SxProps, styled } from "@mui/material";
// TODO:  import { RM_COLOR_BASE_GRAY_LIGHT_80 } from "design-tokens";

export const doughnutContainerSx: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    aspectRatio: "1 / 1",
    justifyContent: "flex-start",
};

export const skeletonSx: SxProps = {
    aspectRatio: "1 / 1",
    flex: 1,
    display: "flex",
    m: 2,
    mt: 0,
};

// OLD STYLES

export const styles = {
    DonutComboChartLight: {
        width: "343px",
        paddingBottom: "10px",
    },
};

export const ChartTitleAndMetricsContainer = styled("div")`
    display: flex;
    width: 343px;
    padding: 0px 12px 8px 24px;
    align-items: flex-start;
`;

export const ChartContainer = styled("div")`
    display: flex;
    padding: 12px 14px 14px 14px;
    align-items: flex-start;
    gap: 10px;
`;

export const TitleContainer = styled("div")`
    display: flex;
    height: 48px;
    padding: 24px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`;

export const MetricContainer = styled("div")`
    display: flex;
    height: 36px;
    align-items: flex-end;
    align-self: stretch;
`;
export const MetricsAndSubtitleContainer = styled("div")`
    display: flex;
    padding: 4px 0px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`;

export const DeterminateMetrics = styled("section")`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

export const ProgressLinesContainer = styled("section")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`;

export const ProgressLines_MetricContainer = styled("div")`
    display: flex;
    height: 32px;
    padding: 8px 0px 16px 0px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    width: 100%;
`;

export const ProgressLines_Title = styled("div")`
    flex: 1 0 0;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const ProgressLines_Track = styled("div")`
    position: relative;
    width: 100%;
    height: 4px;
    flex-shrink: 0;
    border-radius: 50px;
    background: lightgray; // TODO: background;
    margin-bottom: 20px;
`;

export const ProgressLines_Track_Indicator = styled("div")`
    position: absolute;
    left: 0;
    top: 0;
    height: 4px;
    flex-shrink: 0;
    border-radius: 50px;
`;
