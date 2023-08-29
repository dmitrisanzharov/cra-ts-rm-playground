// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import React from 'react';
import {
    Box,
    BoxProps,
    Skeleton,
    Typography,
    Grid,
    SkeletonProps,
    useMediaQuery,
} from '@mui/material';
import { theme } from 'src/components/theme';
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
import './styles.css';
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//
// import React from 'react';
// import {
//     Box,
//     BoxProps,
//     Skeleton,
//     Typography,
//     Grid,
//     SkeletonProps,
// } from '@mui/material';
// import { Doughnut } from 'react-chartjs-2';
// import { useTranslation } from '@hooks/translation';
// import {
//     RM_COLOR_BASE_GREEN,
//     RM_COLOR_BASE_BLUE_MIDDLE,
//     RM_COLOR_BASE_VIOLET_MIDDLE,
//     RM_COLOR_BASE_GRAY_MIDDLE,
// } from 'design-tokens';
// import { CenterTextContainerSx } from './styles';
// import ProgressLinesComponent from './ProgressLinesComponent';

interface DoughnutChartWithBreakdownSkeletonProps extends SkeletonProps {
    componentVariant: string;
}

const DoughnutChartWithBreakdownSkeleton: React.FC<
    DoughnutChartWithBreakdownSkeletonProps
> = ({ variant = 'circular', componentVariant, ...rest }) => {
    //
    const mdSizeOnly = useMediaQuery(theme.breakpoints.only('md'));

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
            >
                <Skeleton
                    variant={variant}
                    width='100%'
                    height='auto'
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
                    justifyContent:
                        mdSizeOnly && componentVariant === 'horizontal'
                            ? 'center'
                            : 'space-around',
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
    chartData: [string, number][];
    chartColors: string[];
    totalNumber: number;
    totalNumberForNrmProgressLines?: number;
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
    totalNumberForNrmProgressLines,
    mostImportantNumberToDisplay,
    mainLabel,
    progressLineHrefsArray,
    loading,
    componentVariant,
    sx,
    ...rest
}) => {
    //
    const mdOnlyMediaQuery = useMediaQuery(theme.breakpoints.only('md'));
    const isBiggerThanXl = useMediaQuery(theme.breakpoints.up('xl'));
    const isBiggerThan1990px = useMediaQuery('(min-width: 1900px)');
    const isBiggerThan3500andHeightSmaller1100 = useMediaQuery(
        '(min-width: 3600px) and (max-height: 1100px)'
    );

    React.useEffect(() => {
        console.log('mahman', isBiggerThan3500andHeightSmaller1100);
    });

    function mediaQueryControl() {
        let sxStyles = {};

        if (
            isBiggerThan3500andHeightSmaller1100 &&
            componentVariant === 'horizontal'
        ) {
            sxStyles = {
                // boxSizing: 'border-box',
                m: 5,
            };
        }

        if (mdOnlyMediaQuery && componentVariant === 'horizontal') {
            console.log('in Medium');
            return {
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            };
        }
        if (isBiggerThan1990px && componentVariant === 'horizontal') {
            return {
                ...sxStyles,
                mt: 2,
            };
        }
        if (isBiggerThanXl && componentVariant === 'horizontal') {
            return {
                ...sxStyles,
                mt: 2,
            };
        }
        return {};
    }

    const defaultColors: string[] = [
        RM_COLOR_BASE_GREEN,
        RM_COLOR_BASE_BLUE_MIDDLE,
        RM_COLOR_BASE_VIOLET_MIDDLE,
        RM_COLOR_BASE_GRAY_MIDDLE,
    ];

    // const { t } = useTranslation();

    const chartDataFinal = {
        labels: chartData.map((el) => el[0]),
        datasets: [
            {
                data: chartData.map((el) => el[1]),
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
        <Box sx={mediaQueryControl} {...rest} className=''>
            {loading && (
                <DoughnutChartWithBreakdownSkeleton
                    componentVariant={componentVariant}
                />
            )}
            {!loading && (
                <Grid container sx={{}} className=''>
                    {componentVariant === 'vertical' && (
                        <Grid item xs={5}>
                            <Box sx={{ pt: 2 }}>
                                <Typography variant='h4'>
                                    {mostImportantNumberToDisplay}
                                </Typography>
                                <Typography variant='caption'>
                                    {t('LABEL_FROM').toLowerCase()}{' '}
                                    {totalNumber.toLocaleString(undefined, {
                                        maximumFractionDigits: 1,
                                    })}{' '}
                                    {t('TOTAL').toLowerCase()}
                                </Typography>
                            </Box>
                        </Grid>
                    )}
                    <Grid
                        item
                        xs={componentVariant === 'vertical' ? 7 : 5}
                        sx={{}}
                        className=''
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                            }}
                            className=''
                        >
                            <Doughnut
                                data={chartDataFinal}
                                options={options}
                                id='DoughnutChartWithBreakdownId'
                            />
                            <Box sx={CenterTextContainerSx}>
                                <Typography
                                    variant={`${
                                        componentVariant === 'vertical'
                                            ? 'h6'
                                            : 'h5'
                                    }`}
                                >
                                    {calculatePercentageOfTotal()} %
                                    {/* {t('PERCENTAGE_LABEL', {
                                        value: calculatePercentageOfTotal(),
                                        })} */}
                                </Typography>
                                <Typography
                                    variant='caption'
                                    sx={{ textAlign: 'center' }}
                                >
                                    {mainLabel.charAt(0).toUpperCase() +
                                        mainLabel.slice(1)}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={componentVariant === 'vertical' ? 12 : 7}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            rowGap: componentVariant === 'vertical' ? 2 : 3,
                            mt: componentVariant === 'vertical' ? 2 : 0,
                            paddingLeft: `${
                                componentVariant === 'vertical' ? '0vw' : '3vw'
                            }`,
                            paddingBottom: `${
                                componentVariant === 'vertical' ? '16px' : '0'
                            }`,
                        }}
                    >
                        {chartData.map(
                            (item: [string, number], idx: number) => {
                                return (
                                    <ProgressLinesComponent
                                        key={JSON.stringify(item)}
                                        metric={item[1]}
                                        label={item[0]}
                                        total={
                                            totalNumberForNrmProgressLines
                                                ? totalNumberForNrmProgressLines
                                                : totalNumber
                                        }
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
