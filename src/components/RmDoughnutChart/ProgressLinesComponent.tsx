import React from "react";
import * as Mui from "@mui/material";
import {
    doughnutContainerSx,
    skeletonSx,
    styles,
    DeterminateMetrics,
    ChartTitleAndMetricsContainer,
    ChartContainer,
    TitleContainer,
    MetricContainer,
    MetricsAndSubtitleContainer,
    ProgressLinesContainer,
    ProgressLines_MetricContainer,
    ProgressLines_Title,
    ProgressLines_Track,
    ProgressLines_Track_Indicator,
} from "./styles";

interface ProgressLinesComponentProps {
    metric: number;
    total: number;
    label: string;
    color: string;
    itemIdx: number;
    onClickInProgressLines: (idx: number) => void;
}

export const ProgressLinesComponent: React.FC<ProgressLinesComponentProps> = ({
    metric,
    total,
    label,
    color,
    itemIdx,
    onClickInProgressLines,
}) => {
    //

    const calcWidth = (): number => {
        return Math.round((metric / total) * 100);
    };

    // React.useEffect(() => {
    //     console.log(metric, total, label, color, itemIdx);
    // }, []);

    return (
        <ProgressLinesContainer>
            <ProgressLines_MetricContainer>
                <ProgressLines_Title
                    onClick={() => onClickInProgressLines(itemIdx)}
                >
                    <Mui.Typography variant='body2'> {label}</Mui.Typography>
                </ProgressLines_Title>
                <Mui.Typography variant='body2' sx={{ textAlign: "right" }}>
                    {" "}
                    {metric}
                </Mui.Typography>
            </ProgressLines_MetricContainer>
            <ProgressLines_Track>
                <ProgressLines_Track_Indicator
                    sx={{ background: color, width: `${calcWidth()}%` }}
                ></ProgressLines_Track_Indicator>
            </ProgressLines_Track>
        </ProgressLinesContainer>
    );
};

export default ProgressLinesComponent;
