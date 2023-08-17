import React from "react";
import { Box, Card, CardContent, CardProps, Typography } from "@mui/material";
import { ChartWrapperOptions } from "react-google-charts";
// @ts-ignore
// import { useTranslation } from "@hooks/translation";
// @ts-ignore
// import RmDoughnutChart from "@reactRootOld/display/Chart/RmDoughnutChart/RmDoughnutChart.tsx";
import {
    useUtilizationStatusDoughnutChartDataHrefsOnly,
    useUtilizationStatusDoughnutChartData,
} from "./hooks";
// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import translation from "src/translation";
import RmDoughnutChart from "../RmDoughnutChart/RmDoughnutChart";
import RmDoughnutChartHorizontal from "../RmDoughnutChart/RmDoughnutChartHorizontal";

// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------

export interface UtilizationCardPropsInterface extends CardProps {
    numberOfRecords: number;
    // status
    statusAvailable: number;
    statusOnRent: number;
    statusNRM: number;
    statusOther: number;
    loading: boolean;
}

// TODO: Move this to design tokens OR import from: "@reactRootOld/organisms/MainMap/styles";
export const DATA_COLOUR_STATUS_ONRENT = "#219653";
export const DATA_COLOUR_STATUS_AVAILABLE = "#2F80ED";
export const DATA_COLOUR_STATUS_NRM = "#9B51E0";
export const DATA_COLOUR_STATUS_UNKNOWN = "#4F4F4F";

const UtilizationCard: React.FC<UtilizationCardPropsInterface> = ({
    numberOfRecords,
    statusAvailable,
    statusOnRent,
    statusNRM,
    statusOther,
    loading,
    ...rest
}) => {
    //
    // const { t } = useTranslation();
    const { t } = translation;

    const chartOptions: ChartWrapperOptions["options"] = {
        colors: [
            DATA_COLOUR_STATUS_ONRENT,
            DATA_COLOUR_STATUS_AVAILABLE,
            DATA_COLOUR_STATUS_NRM,
            DATA_COLOUR_STATUS_UNKNOWN,
        ],
    };

    const chartData = useUtilizationStatusDoughnutChartData({
        statusAvailable,
        statusOnRent,
        statusNRM,
        statusOther,
    });

    const progressLineHrefsArray =
        useUtilizationStatusDoughnutChartDataHrefsOnly();

    function calculatePercentageUtilized(): number {
        return Math.round((statusOnRent / numberOfRecords) * 100);
    }

    return (
        <Card
            {...rest}
            sx={{
                // minHeight: "450px",
                display: "flex",
            }}
        >
            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography gutterBottom variant='h6' component='div'>
                    {/* {t("LABEL_UTILISATION")} */}
                    {t["LABEL_UTILISATION"]}
                </Typography>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {/* <RmDoughnutChart
                            chartOptions={chartOptions}
                            loading={loading}
                            chartData={chartData}
                            totalVehicles={numberOfRecords}
                            percentageUtilized={calculatePercentageUtilized()}
                            numberUtilized={statusOnRent}
                            progressLineHrefsArray={progressLineHrefsArray}
                        /> */}
                        <RmDoughnutChartHorizontal
                            chartOptions={chartOptions}
                            loading={loading}
                            chartData={chartData}
                            totalVehicles={numberOfRecords}
                            percentageUtilized={calculatePercentageUtilized()}
                            numberUtilized={statusOnRent}
                            progressLineHrefsArray={progressLineHrefsArray}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};
export default UtilizationCard;
