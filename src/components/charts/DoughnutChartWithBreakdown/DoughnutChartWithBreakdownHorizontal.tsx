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

const DoughnutChartWithBreakdownHorizontalSkeleton: React.FC = () => {
    return (
        <Grid container sx={{ height: '100%', display: 'flex' }} className=''>
            <Grid
                item
                xs={5}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                className=''
            >
                <Skeleton
                    variant='circular'
                    sx={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '1 / 1',
                    }}
                />
            </Grid>

            <Grid
                item
                xs={7}
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingLeft: '3vw',
                }}
                className=''
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
                            className=''
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

interface DoughnutChartWithBreakdownHorizontalProps extends BoxProps {
    chartData: { values: [string, number][] };
    chartColors: string[];
    totalNumber: number;
    mostImportantNumberToDisplay: number;
    mainLabel: string;
    progressLineHrefsArray: string[];
    loading: boolean;
}

const DoughnutChartWithBreakdownHorizontal: React.FC<DoughnutChartWithBreakdownHorizontalProps> = ({
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
        aspectRatio: 1,
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
            {loading ? <DoughnutChartWithBreakdownHorizontalSkeleton /> : null}
            {/*  */}
            {!loading && (
                <Grid container sx={{ height: '100%' }} className=''>
                    {/* ----------------------------------------- */}
                    {/* CHART */}
                    <Grid
                        item
                        xs={5}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        className=''
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
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
                        xs={7}
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

export default DoughnutChartWithBreakdownHorizontal;
