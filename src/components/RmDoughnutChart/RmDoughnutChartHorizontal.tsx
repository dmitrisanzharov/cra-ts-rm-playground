import React from "react";
import { Box, BoxProps, Skeleton, Typography, Grid } from "@mui/material";
// @ts-ignore
// import { useTranslation } from "@hooks/translation";
import { Chart, ChartWrapperOptions } from "react-google-charts";
// import {
//     RM_COLOR_BASE_GREEN,
//     RM_COLOR_BASE_BLUE_MIDDLE,
//     RM_COLOR_BASE_VIOLET_MIDDLE,
//     RM_COLOR_BASE_GRAY_MIDDLE,
// } from "design-tokens";
// @ts-ignore
import { CenterTextContainerSx } from "./styles";
import ProgressLinesComponent from "./ProgressLinesComponent";
// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import translation from "src/translation";
import {
    RM_COLOR_BASE_GREEN,
    RM_COLOR_BASE_BLUE_MIDDLE,
    RM_COLOR_BASE_VIOLET_MIDDLE,
    RM_COLOR_BASE_GRAY_MIDDLE,
} from "src/design-tokens/tokens";
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------

export type DoughnutChartDataType = {
    chartName: string;
    chartMetric: string;
    values: [string, number, string][];
};

interface RmDoughnutChartProps extends BoxProps {
    chartData: DoughnutChartDataType;
    chartOptions: ChartWrapperOptions["options"];
    percentageUtilized: number;
    totalVehicles: number;
    numberUtilized: number;
    progressLineHrefsArray: string[];
    loading: boolean;
}

export const DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH = 145;

const DoughnutChartSkeleton: React.FC = () => {
    return (
        <Grid container sx={{ height: "100%", display: "flex" }}>
            <Grid
                item
                xs={6}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                className='drr'
            >
                <Skeleton
                    variant='circular'
                    sx={{
                        width: "90%",
                        height: "auto",
                        aspectRatio: "1 / 1",
                    }}
                />
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                }}
                className='dbb'
            >
                {Array.from({ length: 4 }, (_, idx) => idx).map((el) => {
                    return (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            key={`a${el}b`}
                        >
                            <Box sx={{ width: "100%" }}>
                                <Skeleton height={45} width={"20%"} />
                                <Skeleton height={15} />
                            </Box>
                        </Box>
                    );
                })}
            </Grid>
        </Grid>
    );
};

const RmDoughnutChartHorizontal: React.FC<RmDoughnutChartProps> = ({
    chartData,
    chartOptions,
    totalVehicles,
    percentageUtilized,
    numberUtilized,
    progressLineHrefsArray,
    loading,
    sx,
    ...rest
}) => {
    //

    const [displayChart, setDisplayChart] = React.useState<boolean>(false);

    const defaultColors: string[] = [
        RM_COLOR_BASE_GREEN,
        RM_COLOR_BASE_BLUE_MIDDLE,
        RM_COLOR_BASE_VIOLET_MIDDLE,
        RM_COLOR_BASE_GRAY_MIDDLE,
    ];

    // const { t } = useTranslation();
    const { t } = translation;

    const defaultPieChartOptions: ChartWrapperOptions["options"] = {
        pieHole: 0.85,
        is3D: false,
        legend: "none",
        chartArea: {
            left: 12.5,
            top: 12.5,
            bottom: 12.5,
            right: 12.5,
        },
        pieSliceText: "none",
    };

    React.useEffect(() => {
        if (!loading) {
            // A timeout to manage the transition from loading to displaying the chart
            setTimeout(() => {
                setDisplayChart(true);
            }, 300); // You can adjust the delay
        }
    }, [loading]);

    return (
        <Box sx={{ ...sx, height: "100%" }} {...rest}>
            {loading ? <DoughnutChartSkeleton /> : null}
            {displayChart && !loading && (
                <Grid container sx={{ height: "100%" }}>
                    <Grid item xs={5}>
                        <Box sx={{ pt: 2 }}>
                            <Typography variant='h4'>
                                {numberUtilized}
                            </Typography>
                            <Typography variant='caption'>
                                {/* {t("LABEL_FROM").toLowerCase()} */}
                                {t["LABEL_FROM"].toLowerCase()}{" "}
                                {totalVehicles.toLocaleString(undefined, {
                                    maximumFractionDigits: 1,
                                })}{" "}
                                {/* {t("LABEL_VEHICLES_IN_USE").toLowerCase()} */}
                                {t["LABEL_VEHICLES_IN_USE"].toLowerCase()}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={7}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                height: `${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH}px`,
                                width: `${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH}px`,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Chart
                                chartType='PieChart'
                                data={[
                                    [
                                        chartData.chartName,
                                        chartData.chartMetric,
                                        {
                                            role: "tooltip",
                                            type: "string",
                                            p: { html: true },
                                        },
                                    ],
                                    ...chartData.values,
                                ]}
                                options={{
                                    ...defaultPieChartOptions,
                                    ...chartOptions,
                                    tooltip: {
                                        trigger: "selection",
                                        isHtml: true,
                                    },
                                }}
                                height='100%'
                                width='100%'
                            />
                            <Box sx={CenterTextContainerSx}>
                                <Typography variant='h6'>
                                    {percentageUtilized}%
                                </Typography>
                                <Typography variant='caption'>
                                    {/* {t("LABEL_UTILISATION")} */}
                                    {t["LABEL_UTILISATION"]}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {chartData.values.map(
                            (item: [string, number, string], idx: number) => {
                                if (item[1] === 0) {
                                    return null;
                                }

                                return (
                                    <ProgressLinesComponent
                                        key={JSON.stringify(item)}
                                        metric={item[1]}
                                        label={item[0]}
                                        total={totalVehicles}
                                        color={
                                            chartOptions.colors
                                                ? chartOptions.colors[idx]
                                                : defaultColors[idx]
                                        }
                                        href={progressLineHrefsArray[idx]}
                                    />
                                );
                            }
                        )}
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default RmDoughnutChartHorizontal;
