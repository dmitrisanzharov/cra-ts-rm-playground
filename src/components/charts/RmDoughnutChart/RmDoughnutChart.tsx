import React from "react";
import { Box, BoxProps, Skeleton, Typography, Grid } from "@mui/material";
// @ts-ignore
// import { useTranslation } from "@hooks/translation";
// import { Chart, ChartWrapperOptions } from "react-google-charts";
import { Doughnut } from "react-chartjs-2";
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
    values: [string, number][];
};

interface RmDoughnutChartProps extends BoxProps {
    chartData: DoughnutChartDataType;
    chartColors: string[];
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
            <Grid item xs={6} sx={{ pt: 1 }}>
                <Skeleton height={60} width={60} />
                <Skeleton height={25} width='75%' />
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <Skeleton
                    variant='circular'
                    height={`${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH * 0.75}px`}
                    width={`${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH * 0.75}px`}
                />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                }}
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
                                <Skeleton height={45} width={85} />
                                <Skeleton height={15} />
                            </Box>
                        </Box>
                    );
                })}
            </Grid>
        </Grid>
    );
};

const RmDoughnutChart: React.FC<RmDoughnutChartProps> = ({
    chartData,
    chartColors,
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

    const chartDataFinal = {
        labels: chartData.values.map((el) => el[0]),
        datasets: [
            {
                data: chartData.values.map((el) => el[1]),
                backgroundColor: chartColors ? chartColors : defaultColors,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        cutoutPercentage: 82.5,
        legend: {
            display: false,
        },
        onClick: (evt: any, element: any) => {
            if (element?.length > 0) {
                // * note Element is an Object that has INDEX that corresponds to DATA and Label indexes that are passed as props
                // console.log(element[0]._index);
                window.open(
                    progressLineHrefsArray[element[0]._index],
                    "_blank"
                );
            }
        },
        onHover: (evt: any, element: any) => {
            evt.target.style.cursor = element[0] ? "pointer" : "default";
        },
    };

    React.useEffect(() => {
        if (!loading) {
            // A timeout to manage the transition from loading to displaying the chart
            setTimeout(() => {
                setDisplayChart(true);
            }, 300); // You can adjust the delay
        }
    }, [loading]);

    // React.useEffect(() => {
    //     console.log(chartData);
    // }, []);

    return (
        <Box sx={{ ...sx, height: "100%" }} {...rest}>
            {/*  */}
            {loading ? <DoughnutChartSkeleton /> : null}
            {/*  */}
            {displayChart && !loading && (
                <Grid container sx={{ height: "100%" }} className=''>
                    {/* ----------------------------------------- */}
                    {/* TEXT */}
                    <Grid item xs={5} className=''>
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
                    {/* ----------------------------------------- */}
                    {/* CHART */}
                    <Grid
                        item
                        xs={7}
                        sx={{
                            display: "flex",
                        }}
                        className=''
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                flex: 1,
                            }}
                            className=''
                        >
                            <Box
                                className=''
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: `${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH}px`,
                                    width: `${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH}px`,
                                }}
                            >
                                <Doughnut
                                    data={chartDataFinal}
                                    options={options}
                                />
                                <Box sx={CenterTextContainerSx} className=''>
                                    <Typography variant='h6'>
                                        {percentageUtilized}%
                                    </Typography>
                                    <Typography variant='caption'>
                                        {/* {t("LABEL_UTILISATION")} */}
                                        {t["LABEL_UTILISATION"]}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    {/* ----------------------------------------- */}
                    {/* PROGRESS LINES */}
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        className=''
                    >
                        {chartData.values.map(
                            (item: [string, number], idx: number) => {
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
                                            chartColors
                                                ? chartColors[idx]
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

export default RmDoughnutChart;
