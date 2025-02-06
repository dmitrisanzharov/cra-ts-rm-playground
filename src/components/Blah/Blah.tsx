import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    return (
        <Box sx={containerSx}>
            <h1>Fleet Dashboard</h1>
            <Box sx={containerGraySmallBoxes}>
                <Box sx={graySmallBoxSx}></Box>
                <Box sx={graySmallBoxSx}></Box>
                <Box sx={graySmallBoxSx}></Box>
            </Box>
            <Box sx={dashboardContainer}>
                <Box sx={utilisationCard}>
                    Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan
                    marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi
                    bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake
                    pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly
                    sweet.
                </Box>
                <Box sx={NRMBreakdownCard}>NRM Breakdown</Box>
                <Box sx={deviceStatusCard}>device status card</Box>
                <Box sx={stockAnomaliesCard}> stock anomalies card</Box>
            </Box>
            <Box sx={dashboardContainer}>
                <Box sx={deviceAnomaliesCard}>
                    {' '}
                    Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan
                    marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies.
                </Box>
                <Box sx={fleetSize}> fleet size</Box>
                <Box sx={vehiclesCard}> vehicles</Box>
            </Box>
        </Box>
    );
};

export default Blah;

const containerSx = {
    border: '1px solid lightgray',
    padding: '20px',
};

const containerGraySmallBoxes = {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
};

const graySmallBoxSx = {
    backgroundColor: 'gray',
    height: 100,
    width: 220,
    borderRadius: '5px',
};

// THE DASHBOARD
const dashboardContainer = {
    py: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 1,
    '& *': {
        boxSizing: 'border-box',
    },
};

const utilisationCard = {
    backgroundColor: 'gray',
    flex: 2,
    p: 1,
};

const NRMBreakdownCard = {
    ...utilisationCard,
};

const deviceStatusCard = {
    backgroundColor: 'gray',
    flex: 1,
    p: 1,
};

const stockAnomaliesCard = {
    ...deviceStatusCard,
};

const deviceAnomaliesCard = {
    ...deviceStatusCard,
};

const fleetSize = {
    backgroundColor: 'gray',
    flex: 3,
    p: 1,
};

const vehiclesCard = {
    ...utilisationCard,
};
