// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Skeleton,
    Typography,
} from '@mui/material';
import { t } from 'src/translation';
import DoughnutChartWithBreakdown from 'src/components/charts/DoughnutChartWithBreakdown';
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//
// import React from "react";
// import {
//     Box,
//     Card,
//     CardContent,
//     CardProps,
//     Skeleton,
//     Typography,
// } from "@mui/material";

interface NRMBreakdownCardProps extends CardProps {
    numberOfRecords: number;
    loading: boolean;
    nrmBreakdown: { [nrmType: string]: number };
    rowsToDisplay: number;
}
const NRMBreakdownCard: React.FC<NRMBreakdownCardProps> = ({
    numberOfRecords,
    loading,
    nrmBreakdown,
    rowsToDisplay,
    ...rest
}) => {
    //

    const prepareDataForDoughnutChartWithBreakdown = React.useMemo(() => {
        // * sort highest to smallest
        let start = Object.entries(nrmBreakdown).sort(
            ([_, a], [__, b]) => b - a
        );
        // * slice based on rowsToDisplayProp
        start.splice(rowsToDisplay);

        const finalData = start.map(([label, number]) => {});
        console.log('data', finalData);
    }, [nrmBreakdown]);

    const chartColors = [
        '#420075',
        '#5C00A3',
        '#7500D1',
        '#8F00FF',
        '#A32EFF',
        '#B75CFF',
        '#CB8AFF',
    ];

    return (
        <Card {...rest}>
            <CardContent
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography gutterBottom variant='h6' component='div'>
                    {`${t('NRM')} ${t('LABEL_BREAKDOWN')}`}
                </Typography>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                    }}
                >
                    {/* <DoughnutChartWithBreakdown
                        chartColors={chartColors}
                        loading={loading}
                        chartData={prepareDataForDoughnutChartWithBreakdown}
                        totalNumber={numberOfRecords}
                        mostImportantNumberToDisplay={statusOnRent}
                        mainLabel={t('LABEL_UTILISATION')}
                        progressLineHrefsArray={progressLineHrefsArray}
                    /> */}
                    {loading && (
                        <Box>
                            <Skeleton height={25} />
                            <Skeleton height={25} />
                            <Skeleton height={25} />
                            <Skeleton height={25} />
                            <Skeleton height={25} />
                            <Skeleton height={25} />
                            <Skeleton height={25} />
                            <Skeleton height={25} />
                            <Skeleton height={25} />
                        </Box>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};
export default NRMBreakdownCard;
