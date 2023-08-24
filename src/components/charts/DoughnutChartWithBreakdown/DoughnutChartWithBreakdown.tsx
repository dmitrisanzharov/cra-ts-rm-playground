// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import React from 'react';
import {
    Box,
    BoxProps,
    Skeleton,
    Typography,
    Grid,
    SkeletonProps,
} from '@mui/material';
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

interface DoughnutChartWithBreakdownSkeletonProps extends SkeletonProps {
    componentVariant: string;
}

const DoughnutChartWithBreakdownSkeleton: React.FC<
    DoughnutChartWithBreakdownSkeletonProps
> = ({ variant = 'circular', componentVariant, ...rest }) => {
    return (
        <Grid container sx={{ height: '100%', display: 'flex' }}>
            {componentVariant === 'vertical' && (
                <Grid item xs={6} sx={{ pt: 1 }}>
                    <Skeleton height={60} width={60} />
                    <Skeleton height={25} width='75%' />
                </Grid>
            )}
            <Grid
                item
                xs={componentVariant === 'vertical' ? 6 : 5}
                sx={{
                    display: 'flex',
                    justifyContent: `${
                        componentVariant === 'vertical' ? 'flex-end' : 'center'
                    }`,
                    alignItems: 'center',
                }}
                className=''
            >
                <Skeleton
                    variant='circular'
                    width='100%'
                    height={'auto'}
                    sx={{ aspectRatio: 1 }}
                />
            </Grid>
            <Grid
                item
                xs={componentVariant === 'vertical' ? 12 : 7}
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    paddingLeft: `${
                        componentVariant === 'horizontal' && '5vw'
                    }`,
                }}
            >
                {Array.from({ length: 4 }, (_, idx) => idx).map((el) => {
                    return (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mb: 2,
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
    componentVariant: 'vertical' | 'horizontal';
}

const DoughnutChartWithBreakdown: React.FC<DoughnutChartWithBreakdownProps> = ({
    chartData,
    chartColors,
    totalNumber,
    mostImportantNumberToDisplay,
    mainLabel,
    progressLineHrefsArray,
    loading,
    componentVariant,
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
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 85,
        legend: {
            display: false,
        },
        onClick: (evt: any, element: any) => {
            if (element?.length > 0) {
                // * note Element is an Object that has INDEX that corresponds to DATA and Label indexes that are passed as props
                if (progressLineHrefsArray[element[0]._index]) {
                    window.open(
                        progressLineHrefsArray[element[0]._index],
                        '_blank'
                    );
                }
            }
        },
        onHover: (event: any, element: any) => {
            event.target.style.cursor = element[0] ? 'pointer' : 'default';
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
            {loading && (
                <DoughnutChartWithBreakdownSkeleton
                    componentVariant={componentVariant}
                />
            )}
            {!loading && (
                <Grid container sx={{ height: '100%' }} className=''>
                    {componentVariant === 'vertical' && (
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
                    )}
                    {/* ----------------------------------------- */}
                    {/* CHART */}
                    <Grid
                        item
                        xs={componentVariant === 'vertical' ? 7 : 5}
                        sx={{
                            display: 'flex',
                        }}
                        className=''
                    >
                        <Box
                            sx={{
                                flex: 1,
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                marginRight: `${
                                    componentVariant === 'vertical'
                                        ? '-15%'
                                        : '0%'
                                }`,
                            }}
                            className=''
                        >
                            <Doughnut
                                data={chartDataFinal}
                                options={options}
                                id='DoughnutChartWithBreakdown'
                            />
                            <Box sx={CenterTextContainerSx} className=''>
                                <Typography
                                    variant={`${
                                        componentVariant === 'vertical'
                                            ? 'h6'
                                            : 'h5'
                                    }`}
                                >
                                    {calculatePercentageOfTotal()}%
                                    {/* {t('PERCENTAGE_LABEL', {
                                        value: calculatePercentageOfTotal(),
                                    })} */}
                                </Typography>
                                <Typography variant='caption'>
                                    {mainLabel.charAt(0).toUpperCase() +
                                        mainLabel.slice(1)}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {/* ----------------------------------------- */}
                    {/* PROGRESS LINES */}
                    <Grid
                        item
                        xs={componentVariant === 'vertical' ? 12 : 7}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            rowGap: componentVariant === 'vertical' ? 2 : 3,
                            paddingLeft: `${
                                componentVariant === 'vertical' ? '0vw' : '3vw'
                            }`,
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
                                        componentVariant={componentVariant}
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
