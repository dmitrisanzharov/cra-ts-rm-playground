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
import { theme } from 'src/components/theme';
import { t } from 'src/translation';
import DoughnutChartWithBreakdown from 'src/components/charts/DoughnutChartWithBreakdown/DoughnutChartWithBreakdown';
import { useUtilizationStatusDoughnutChartHrefs } from './hooks';
import {
    DATA_COLOUR_STATUS_ONRENT,
    DATA_COLOUR_STATUS_AVAILABLE,
    DATA_COLOUR_STATUS_NRM,
    DATA_COLOUR_STATUS_UNKNOWN,
} from 'src/externalRmStyles/externalRmStyles';
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//
// import React from 'react';
// import {
//     Box,
//     Card,
//     CardContent,
//     CardProps,
//     Typography,
//     useMediaQuery,
// } from '@mui/material';
// import { theme } from '@reactRootOld/theme';
// import { useTranslation } from '@hooks/translation';
// import DoughnutChartWithBreakdown from '@reactRootOld/display/Chart/DoughnutChartWithBreakdown';
// import { useUtilizationStatusDoughnutChartHrefs } from './hooks';
// import {
//     DATA_COLOUR_STATUS_ONRENT,
//     DATA_COLOUR_STATUS_AVAILABLE,
//     DATA_COLOUR_STATUS_NRM,
//     DATA_COLOUR_STATUS_UNKNOWN,
// } from '@reactRootOld/organisms/MainMap/styles';

export interface UtilizationCardProps extends CardProps {
    numberOfRecords: number;
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
    // const { t } = useTranslation();

    const isScreenBiggerThanSm = useMediaQuery(theme.breakpoints.up('sm'));
    const mdOnlyMediaQuery = useMediaQuery(theme.breakpoints.only('md'));

    const chartColors: string[] = [
        DATA_COLOUR_STATUS_ONRENT,
        DATA_COLOUR_STATUS_AVAILABLE,
        DATA_COLOUR_STATUS_NRM,
        DATA_COLOUR_STATUS_UNKNOWN,
    ];

    const chartData: [string, number][] = React.useMemo(
        () => [
            [t('ONRENT'), statusOnRent],
            [t('AVAILABLE'), statusAvailable],
            [t('NRM'), statusNRM],
            [t('OTHER'), statusOther],
        ],
        [t, statusOnRent, statusAvailable, statusNRM, statusOther]
    );

    const progressLineHrefsArray = useUtilizationStatusDoughnutChartHrefs();

    React.useEffect(() => {
        console.log(
            'UtilizationCard',
            isScreenBiggerThanSm ? 'horizontal' : 'vertical'
        );
    });

    return (
        <Card {...rest}>
            <CardContent
                className=''
                // sx={
                //     mdOnlyMediaQuery
                //         ? {
                //               height: '100%',
                //               display: 'flex',
                //               flexDirection: 'column',
                //           }
                //         : {}
                // }
            >
                <Typography gutterBottom variant='h6' component='div'>
                    {t('LABEL_UTILISATION')}
                </Typography>
                <Box
                    className=''
                    // sx={
                    //     mdOnlyMediaQuery
                    //         ? {
                    //               flex: 1,
                    //           }
                    //         : {}
                    // }
                >
                    <DoughnutChartWithBreakdown
                        chartColors={chartColors}
                        loading={loading}
                        chartData={chartData}
                        totalNumber={numberOfRecords}
                        mostImportantNumberToDisplay={statusOnRent}
                        mainLabel={t('LABEL_UTILISATION')}
                        progressLineHrefsArray={progressLineHrefsArray}
                        componentVariant={
                            isScreenBiggerThanSm ? 'horizontal' : 'vertical'
                        }
                        // componentVariant={'vertical'}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};
export default UtilizationCard;
