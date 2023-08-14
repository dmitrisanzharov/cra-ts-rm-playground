import React from "react";
import {
    Box,
    BoxProps,
    Skeleton,
    SkeletonProps,
    SxProps,
    Typography,
    Grid,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTranslation } from "@hooks/translation";
import { Chart, ChartWrapperOptions } from "react-google-charts";
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
// import { RM_SIZE_FONT_BASE } from "design-tokens";
// @ts-ignore
import ProgressLinesComponent from "./ProgressLinesComponent";

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
    // SAMS STUFF
    loading: boolean;
}

export const DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH = 145;

const DoughnutChartSkeleton = () => {
    return (
        <Grid container>
            <Grid item sm={6} className='' sx={{ pt: 1 }}>
                <Skeleton height={60} width={60} />
                <Skeleton height={25} width={"75%"} />
            </Grid>
            <Grid
                item
                sm={6}
                className=''
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    pb: 0.5,
                }}
            >
                <Skeleton
                    variant='circular'
                    height={`${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH}px`}
                    width={`${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH}px`}
                />
            </Grid>
            <Grid item sm={12} className='' sx={{ height: "100%" }}>
                {Array.from({ length: 4 }, (_, idx) => idx).map((el) => {
                    return (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "20px",
                            }}
                            className=''
                        >
                            <Box sx={{ width: "100%" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        width: "100%",
                                    }}
                                    className=''
                                >
                                    <Skeleton height={45} width={85} />
                                    <Skeleton height={45} width={45} />
                                </Box>
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
    chartOptions,
    totalVehicles,
    percentageUtilized,
    numberUtilized,
    // Sam stuff
    loading,
    sx,
    ...rest
}) => {
    //

    const [displayChart, setDisplayChart] = React.useState<boolean>(false);

    const defaultColors: any = [
        // TODO: this can be imported
        "green",
        "blue",
        "violet",
        "gray",
    ];

    // const { t } = useTranslation();
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

    if (loading) {
        return <DoughnutChartSkeleton />;
    }

    if (displayChart && !loading) {
        return (
            <Grid container className=''>
                {/* TEXT */}
                <Grid item xs={5} className=''>
                    <Box
                        sx={{
                            pt: 2,
                        }}
                        className=''
                    >
                        <Typography variant='h4' className=''>
                            {numberUtilized}
                        </Typography>
                        <Typography variant='caption' className=''>
                            of{" "}
                            {totalVehicles.toLocaleString(undefined, {
                                maximumFractionDigits: 1,
                            })}{" "}
                            Vehicles are in use
                        </Typography>
                    </Box>
                </Grid>
                {/* CHART */}
                {/* You MUST have height for the google chart, otherwise it will stretch the container, it can be in Options or directly inside the Chart Component */}
                <Grid
                    item
                    xs={7}
                    className=''
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <Box
                        className=''
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
                        <Box
                            sx={{
                                position: "absolute",
                                borderRadius: "50%",
                                width: "65%",
                                height: "65%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            className=''
                        >
                            <Typography variant='h6'>
                                {percentageUtilized}%
                            </Typography>
                            <Typography variant='caption'>
                                Utilisation
                                {/* TODO:  {t("LABEL_UTILISATION")} */}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* PROGRESS */}
                <Grid item xs={12} className=''>
                    {chartData.values.map((item: any, idx: number) => {
                        return (
                            <ProgressLinesComponent
                                key={JSON.stringify(item)}
                                metric={item[1]}
                                label={item[0]}
                                total={totalVehicles}
                                color={
                                    chartOptions.colors
                                        ? chartOptions.colors[idx - 1]
                                        : defaultColors[idx]
                                }
                                itemIdx={idx}
                                href={item[2]}
                            />
                        );
                    })}
                </Grid>
            </Grid>
        );
    }

    return null;
};

export default RmDoughnutChart;
