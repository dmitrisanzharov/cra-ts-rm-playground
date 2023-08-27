// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { t } from 'src/translation';
import DoughnutChartWithBreakdown from 'src/components/charts/DoughnutChartWithBreakdown';
import { useNRMBreakdownCardHrefs } from './hooks';
import { theme } from 'src/components/theme';
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

    const isScreenBiggerThanSm = useMediaQuery(theme.breakpoints.up('sm'));

    const chartColors = [
        '#420075',
        '#5C00A3',
        '#7500D1',
        '#8F00FF',
        '#A32EFF',
        '#B75CFF',
        '#CB8AFF',
    ];

    const prepareDataForDoughnutChartWithBreakdown = React.useMemo(() => {
        // * sort highest to smallest
        let data = Object.entries(nrmBreakdown).sort(
            ([_, a], [__, b]) => b - a
        );

        // * collapse labels to 'Other' label if X > 5;
        if (data.length > 5) {
            let dataLeft = data.slice(0, 4);
            let dataRight = data
                .slice(4)
                .reduce((accumulator, [label, value]) => {
                    accumulator = accumulator + value;
                    return accumulator;
                }, 0);

            data = [...dataLeft, ['OTHER', dataRight]];
        }

        // * refactor the label into THIS_FORMAT_FOR_TRANSLATIONS
        const finalData: [string, number][] = data.map(([label, number]) => {
            label = label.replaceAll(' ', '_');
            console.log('label: ', label);
            if (label === 'OTHER') {
                return [t(label), number];
            }

            return [t(`LABEL_${label}`), number];
        });
        return finalData;
    }, [nrmBreakdown]);

    const calculateTotalVehiclesInNrm = React.useMemo(() => {
        return Object.values(nrmBreakdown).reduce((accumulator, value) => {
            accumulator += value;
            return accumulator;
        }, 0);
    }, [nrmBreakdown]);

    const progressLineHrefsArray = useNRMBreakdownCardHrefs();

    return (
        <Card {...rest}>
            <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                    {`${t('NRM')} ${t('LABEL_BREAKDOWN')}`}
                </Typography>
                <Box>
                    <DoughnutChartWithBreakdown
                        chartColors={chartColors}
                        loading={loading}
                        chartData={prepareDataForDoughnutChartWithBreakdown}
                        totalNumber={numberOfRecords}
                        mostImportantNumberToDisplay={
                            calculateTotalVehiclesInNrm
                        }
                        mainLabel={t('NRM_VEHICLES')}
                        progressLineHrefsArray={progressLineHrefsArray}
                        componentVariant={
                            isScreenBiggerThanSm ? 'horizontal' : 'vertical'
                        }
                    />
                    {/* {loading && (
                        <Box sx={{ width: '100%' }}>
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
                    )} */}
                </Box>
            </CardContent>
        </Card>
    );
};
export default NRMBreakdownCard;
