// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import React from 'react';
import { Box, BoxProps, Skeleton, Typography, Grid } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { t } from 'src/translation';
import {
    RM_COLOR_BASE_GREEN,
    RM_COLOR_BASE_BLUE_MIDDLE,
    RM_COLOR_BASE_VIOLET_MIDDLE,
    RM_COLOR_BASE_GRAY_MIDDLE,
} from 'src/design-tokens/tokens';
import { CenterTextContainerSx } from './styles';
import ProgressLinesComponent from './ProgressLinesComponent';
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
// import React from 'react';
// import { Box, BoxProps, Skeleton, Typography, Grid } from '@mui/material';
// @ts-ignore
// import { useTranslation } from "@hooks/translation";
// import { Chart, ChartWrapperOptions } from "react-google-charts";
// import { Doughnut } from 'react-chartjs-2';
// import {
//     RM_COLOR_BASE_GREEN,
//     RM_COLOR_BASE_BLUE_MIDDLE,
//     RM_COLOR_BASE_VIOLET_MIDDLE,
//     RM_COLOR_BASE_GRAY_MIDDLE,
// } from "design-tokens";
// @ts-ignore
// import { CenterTextContainerSx } from './styles';
// import ProgressLinesComponent from './ProgressLinesComponent';

export const DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH = 145;

const DoughnutChartWithBreakdownSkeleton: React.FC = () => {
    return (
        <Grid container sx={{ height: '100%', display: 'flex' }}>
            <Grid item xs={6} sx={{ pt: 1 }}>
                <Skeleton height={60} width={60} />
                <Skeleton height={25} width='75%' />
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
            >
                <Skeleton
                    variant='circular'
                    height={`${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH * 0.75}px`}
                    width={`${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH * 0.75}px`}
                />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }}
            >
                {Array.from({ length: 4 }, (_, idx) => idx).map((el) => {
                    return (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            key={`a${el}b`}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Skeleton height={45} width={85} />
                                <Skeleton height={15} />
                            </Box>
                        </Box>
                    );
                })}
            </Grid>
        </Grid>
    );
};

interface DoughnutChartWithBreakdownProps extends BoxProps {
    chartData: { values: [string, number][] };
    chartColors: string[];
    totalNumber: number;
    mostImportantNumberToDisplay: number;
    mainLabel: string;
    progressLineHrefsArray: string[];
    loading: boolean;
}

const DoughnutChartWithBreakdown: React.FC<DoughnutChartWithBreakdownProps> = ({
    chartData,
    chartColors,
    totalNumber,
    mostImportantNumberToDisplay,
    mainLabel,
    progressLineHrefsArray,
    loading,
    sx,
    ...rest
}) => {
    //
    const defaultColors: string[] = [
        RM_COLOR_BASE_GREEN,
        RM_COLOR_BASE_BLUE_MIDDLE,
        RM_COLOR_BASE_VIOLET_MIDDLE,
        RM_COLOR_BASE_GRAY_MIDDLE,
    ];

    // const { t } = useTranslation();

    const chartDataFinal = {
        labels: chartData.values.map((el) => el[0]),
        datasets: [
            {
                data: chartData.values.map((el) => el[1]),
                backgroundColor: chartColors ? chartColors : defaultColors,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        cutoutPercentage: 82.5,
        legend: {
            display: false,
        },
        onClick: (evt: any, element: any) => {
            if (element?.length > 0) {
                // * note Element is an Object that has INDEX that corresponds to DATA and Label indexes that are passed as props
                window.open(
                    progressLineHrefsArray[element[0]._index],
                    '_blank'
                );
            }
        },
        onHover: (evt: any, element: any) => {
            evt.target.style.cursor = element[0] ? 'pointer' : 'default';
        },
    };

    const calculatePercentageOfTotal = React.useMemo(
        () => (): number => {
            return Math.round(
                (mostImportantNumberToDisplay / totalNumber) * 100
            );
        },
        [totalNumber, mostImportantNumberToDisplay]
    );

    return (
        <Box sx={{ ...sx, height: '100%' }} {...rest}>
            {/*  */}
            {loading ? <DoughnutChartWithBreakdownSkeleton /> : null}
            {/*  */}
            {!loading && (
                <Grid container sx={{ height: '100%' }} className=''>
                    <Grid item xs={5} className=''>
                        <Box sx={{ pt: 2 }}>
                            <Typography variant='h4'>
                                {mostImportantNumberToDisplay}
                            </Typography>
                            <Typography variant='caption'>
                                {t('LABEL_FROM').toLowerCase()}{' '}
                                {totalNumber.toLocaleString(undefined, {
                                    maximumFractionDigits: 1,
                                })}{' '}
                                {mainLabel.toLowerCase()}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={7}
                        sx={{
                            display: 'flex',
                        }}
                        className=''
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flex: 1,
                            }}
                            className=''
                        >
                            <Box
                                className=''
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: `${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH}px`,
                                    width: `${DOUGHNUT_CHART_DEFAULT_HEIGHT_WIDTH}px`,
                                }}
                            >
                                <Doughnut
                                    data={chartDataFinal}
                                    options={options}
                                />
                                <Box sx={CenterTextContainerSx} className=''>
                                    <Typography variant='h6'>
                                        {calculatePercentageOfTotal()}%
                                        {/* {t('PERCENTAGE_LABEL')} */}
                                        {/* this need to change to: t('percentageLabel', {value: 86}) */}
                                    </Typography>
                                    <Typography variant='caption'>
                                        {mainLabel.charAt(0).toUpperCase() +
                                            mainLabel.slice(1)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    {/* ----------------------------------------- */}
                    {/* PROGRESS LINES */}
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        className=''
                    >
                        {chartData.values.map(
                            (item: [string, number], idx: number) => {
                                // * this is to remove any label that has No value, e.g. OTHER in Vehicles Utilisation
                                if (item[1] === 0) {
                                    return null;
                                }

                                return (
                                    <ProgressLinesComponent
                                        key={JSON.stringify(item)}
                                        metric={item[1]}
                                        label={item[0]}
                                        total={totalNumber}
                                        color={
                                            chartColors
                                                ? chartColors[idx]
                                                : defaultColors[idx]
                                        }
                                        href={progressLineHrefsArray[idx]}
                                    />
                                );
                            }
                        )}
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default DoughnutChartWithBreakdown;
