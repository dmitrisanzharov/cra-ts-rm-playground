import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Typography,
    Skeleton,
} from "@mui/material";
// import { useTranslation } from '@hooks/translation'
// import { RM_COLOR_BASE_GRAY_MIDDLE, RM_COLOR_BASE_GREEN, RM_COLOR_BASE_ORANGE, RM_COLOR_BASE_RED, RM_COLOR_BUTTON_PRIMARY_DISABLED_FOREGROUND } from 'design-tokens';
// import RmPieChart from '@reactRootOld/display/Chart/RmPieChart';
// import { ChartWrapperOptions } from "react-google-charts";
// import { useDeviceStatusPieChartData } from './hooks';
import { DeviceStatusCardProps } from "./types";

// const chartOptions: ChartWrapperOptions['options'] = {
//     colors: [RM_COLOR_BASE_GREEN, RM_COLOR_BASE_ORANGE, RM_COLOR_BASE_RED, RM_COLOR_BASE_GRAY_MIDDLE, RM_COLOR_BUTTON_PRIMARY_DISABLED_FOREGROUND],
// };

const DeviceStatusCard: React.FC<any> = ({
    loading,
    deviceStatus,
    ...rest
}) => {
    // const { t } = useTranslation();
    // const chartData = useDeviceStatusPieChartData(deviceStatus);

    return (
        <Card {...rest}>
            <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                    {/* {t("LABEL_DEVICE_STATUS")} */} Device Status
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
                >
                    {/* <RmPieChart
                        loading={loading}
                        chartData={chartData}
                        chartOptions={chartOptions}
                    /> */}
                    <>
                        <Skeleton
                            variant={"circular"}
                            sx={{
                                aspectRatio: "1 / 1",
                                flex: 1,
                                display: "flex",
                                m: 2,
                                mt: 0,
                            }}
                        />
                        <Skeleton width='100%' sx={{ mt: -2 }} />
                    </>
                </Box>
            </CardContent>
        </Card>
    );
};

export default DeviceStatusCard;
