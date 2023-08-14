import React from "react";
import { Box, Card, CardContent, CardProps, Typography } from "@mui/material";
import { ChartWrapperOptions } from "react-google-charts";
import RmDoughnutChart from "../RmDoughnutChart/RmDoughnutChart";
import generatePieChartTooltip from "./hooks";

interface UtilizationCardProps extends CardProps {
    numberOfRecords: number;
    // status
    statusAvailable: number;
    statusOnRent: number;
    statusNRM: number;
    statusOther: number;
    loading: boolean;
}
const UtilizationCard: React.FC<UtilizationCardProps> = ({
    numberOfRecords,
    statusAvailable,
    statusOnRent,
    statusNRM,
    statusOther,
    loading,
    ...rest
}) => {
    //

    const chartOptions: ChartWrapperOptions["options"] = {
        colors: [
            // TODO: need to change colors
            "green",
            "blue",
            "violet",
            "gray",
        ],
    };

    // TODO: need to be translated
    const chartData = [
        [
            "Status",
            "Amount",
            {
                role: "tooltip",
                type: "string",
                p: { html: true },
            },
        ],
        [
            "On Rent",
            statusOnRent,
            generatePieChartTooltip(
                "label1",
                statusOnRent,
                "https://www.google.com",
                "green"
            ),
        ],
        [
            "Available",
            statusAvailable,
            generatePieChartTooltip(
                "label1",
                statusOnRent,
                "https://www.google.com",
                "green"
            ),
        ],
        [
            "Nrm",
            statusNRM,
            generatePieChartTooltip(
                "label1",
                statusOnRent,
                "https://www.google.com",
                "green"
            ),
        ],
        [
            "Other",
            statusOther,
            generatePieChartTooltip(
                "label1",
                statusOnRent,
                "https://www.google.com",
                "green"
            ),
        ],
    ];

    function calculatePercentageUtilized(): number {
        return Math.round((statusOnRent / numberOfRecords) * 100);
    }

    return (
        <Card {...rest} className='' sx={{ minHeight: "530px" }}>
            <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                    {/* TODO: Translation */}
                    Utilisation
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        aspectRatio: "1 / 1",
                        justifyContent: "flex-start",
                    }}
                    className=''
                >
                    <RmDoughnutChart
                        chartOptions={chartOptions}
                        loading={loading}
                        chartData={chartData}
                        totalVehicles={numberOfRecords}
                        percentageUtilized={calculatePercentageUtilized()}
                        numberUtilized={statusOnRent}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};
export default UtilizationCard;
