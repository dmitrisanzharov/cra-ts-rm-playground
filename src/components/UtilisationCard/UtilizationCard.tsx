import React from "react";
import { Box, Card, CardContent, CardProps, Typography } from "@mui/material";
import { ChartWrapperOptions } from "react-google-charts";
import RmDoughnutChart from "src/components/RmDoughnutChart/RmDoughnutChart";
import { useUtilizationStatusDoughnutChartData } from "./hooks";
import translations from "src/translation/index";
// import { RM_COLOR_BASE_GRAY_LIGHT_20 } from "../../design-tokens/tokens";

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
    const { t } = translations;

    const chartOptions: ChartWrapperOptions["options"] = {
        colors: [
            DATA_COLOUR_STATUS_ONRENT,
            DATA_COLOUR_STATUS_AVAILABLE,
            DATA_COLOUR_STATUS_NRM,
            DATA_COLOUR_STATUS_UNKNOWN,
        ],
    };

    const chartData = useUtilizationStatusDoughnutChartData({
        numberOfRecords,
        statusAvailable,
        statusOnRent,
        statusNRM,
        statusOther,
        loading,
    });

    function calculatePercentageUtilized(): number {
        return Math.round((statusOnRent / numberOfRecords) * 100);
    }

    return (
        <Card
            {...rest}
            sx={{
                minHeight: "450px",
                display: "flex",
            }}
            className=''
        >
            <CardContent
                className=''
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography gutterBottom variant='h6' component='div'>
                    {t["LABEL_UTILISATION"]}
                </Typography>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                    }}
                    className=''
                >
                    <Box sx={{ flex: 1 }}>
                        <RmDoughnutChart
                            chartOptions={chartOptions}
                            loading={loading}
                            chartData={chartData}
                            totalVehicles={numberOfRecords}
                            percentageUtilized={calculatePercentageUtilized()}
                            numberUtilized={statusOnRent}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};
export default UtilizationCard;
