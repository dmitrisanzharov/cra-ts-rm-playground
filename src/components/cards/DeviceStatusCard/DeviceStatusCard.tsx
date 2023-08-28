// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import React from 'react';
import { Box, Card, CardContent, CardProps, Typography } from '@mui/material';
import { t } from 'src/translation/index';
import {
    RM_COLOR_BASE_GRAY_MIDDLE,
    RM_COLOR_BASE_GREEN,
    RM_COLOR_BASE_ORANGE,
    RM_COLOR_BASE_RED,
    RM_COLOR_BUTTON_PRIMARY_DISABLED_FOREGROUND,
} from 'src/design-tokens/tokens';
import RmPieChart from 'src/components/charts/RmPieChart';
import { ChartWrapperOptions } from 'react-google-charts';
import { useDeviceStatusPieChartData } from './hooks';
import { DeviceStatusCardProps } from './types';
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//
// import React from 'react';
// import { Box, Card, CardContent, CardProps, Typography } from '@mui/material';
// import { useTranslation } from '@hooks/translation';
// import {
//     RM_COLOR_BASE_GRAY_MIDDLE,
//     RM_COLOR_BASE_GREEN,
//     RM_COLOR_BASE_ORANGE,
//     RM_COLOR_BASE_RED,
//     RM_COLOR_BUTTON_PRIMARY_DISABLED_FOREGROUND,
// } from 'design-tokens';
// import RmPieChart from '@reactRootOld/display/Chart/RmPieChart';
// import { ChartWrapperOptions } from 'react-google-charts';
// import { useDeviceStatusPieChartData } from './hooks';
// import { DeviceStatusCardProps } from './types';

const chartOptions: ChartWrapperOptions['options'] = {
    colors: [
        RM_COLOR_BASE_GREEN,
        RM_COLOR_BASE_ORANGE,
        RM_COLOR_BASE_RED,
        RM_COLOR_BASE_GRAY_MIDDLE,
        RM_COLOR_BUTTON_PRIMARY_DISABLED_FOREGROUND,
    ],
};

const DeviceStatusCard: React.FC<DeviceStatusCardProps> = ({
    loading,
    deviceStatus,
    ...rest
}) => {
    // const { t } = useTranslation();
    const chartData = useDeviceStatusPieChartData(deviceStatus);

    return (
        <Card {...rest}>
            <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                    {t('LABEL_DEVICE_STATUS')}
                </Typography>
                <Box>
                    <RmPieChart loading={loading} chartData={chartData} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default DeviceStatusCard;
