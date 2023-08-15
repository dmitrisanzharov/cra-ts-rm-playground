import React from "react";
import { Box, Card, CardContent, CardProps, Typography } from "@mui/material";
import { ChartWrapperOptions } from "react-google-charts";
import RmDoughnutChart from "../RmDoughnutChart/RmDoughnutChart";
import { useUtilizationStatusDoughnutChartData } from "./hooks";

export interface UtilizationCardPropsInterface extends CardProps {
    numberOfRecords: number;
    // status
    statusAvailable: number;
    statusOnRent: number;
    statusNRM: number;
    statusOther: number;
    loading: boolean;
}
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

    // * NO CHANGES NEEDED
    const chartOptions: ChartWrapperOptions["options"] = {
        colors: [
            // TODO: need to change colors
            "green",
            "blue",
            "violet",
            "gray",
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
                    {/* TODO: Translation */}
                    Utilisation
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
