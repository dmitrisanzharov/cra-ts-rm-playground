// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import React from 'react';
import { Box, Card, CardContent, CardProps, Typography } from '@mui/material';
import { useUtilizationStatusDoughnutChartHrefs } from './hooks';
import { t } from 'src/translation';
import DoughnutChartWithBreakdown from '../../charts/DoughnutChartWithBreakdown/DoughnutChartWithBreakdown';
import { DoughnutChartWithBreakdownHorizontal } from 'src/components/charts/DoughnutChartWithBreakdown';
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//
// import React from 'react';
// import { Box, Card, CardContent, CardProps, Typography } from '@mui/material';
// import { ChartWrapperOptions } from "react-google-charts";
// @ts-ignore
// import { useTranslation } from "@hooks/translation";
// @ts-ignore
// import RmDoughnutChart from "@reactRootOld/display/Chart/RmDoughnutChart/RmDoughnutChart.tsx";
// import { useUtilizationStatusDoughnutChartHrefs } from './hooks';

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
export const DATA_COLOUR_STATUS_ONRENT = '#219653';
export const DATA_COLOUR_STATUS_AVAILABLE = '#2F80ED';
export const DATA_COLOUR_STATUS_NRM = '#9B51E0';
export const DATA_COLOUR_STATUS_UNKNOWN = '#4F4F4F';

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

    const chartColors: string[] = [
        DATA_COLOUR_STATUS_ONRENT,
        DATA_COLOUR_STATUS_AVAILABLE,
        DATA_COLOUR_STATUS_NRM,
        DATA_COLOUR_STATUS_UNKNOWN,
    ];

    const chartData: { values: [string, number][] } = React.useMemo(
        () => ({
            values: [
                [t('ONRENT'), statusOnRent],
                [t('AVAILABLE'), statusAvailable],
                [t('NRM'), statusNRM],
                [t('OTHER'), statusOther],
            ],
        }),
        [statusOnRent, statusAvailable, statusNRM, statusOther]
    );

    const progressLineHrefsArray = useUtilizationStatusDoughnutChartHrefs();

    return (
        <Card
            {...rest}
            sx={{
                // minHeight: "450px",
                display: 'flex',
            }}
        >
            <CardContent
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography gutterBottom variant='h6' component='div'>
                    {t('LABEL_UTILISATION')}
                </Typography>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* <DoughnutChartWithBreakdown
                            chartColors={chartColors}
                            loading={loading}
                            chartData={chartData}
                            totalNumber={numberOfRecords}
                            mostImportantNumberToDisplay={statusOnRent}
                            mainLabel={t('LABEL_UTILISATION')}
                            progressLineHrefsArray={progressLineHrefsArray}
                        /> */}
                        <DoughnutChartWithBreakdownHorizontal
                            chartColors={chartColors}
                            loading={loading}
                            chartData={chartData}
                            totalNumber={numberOfRecords}
                            mostImportantNumberToDisplay={statusOnRent}
                            mainLabel={t('LABEL_UTILISATION')}
                            progressLineHrefsArray={progressLineHrefsArray}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};
export default UtilizationCard;
