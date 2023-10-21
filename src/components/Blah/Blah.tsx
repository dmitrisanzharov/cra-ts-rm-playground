import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
import { useCountIncrease, incCount2 } from './hooks';
import allCarsApi from 'src/fakeApis/fleetAllVehicles';

type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {

    console.log(allCarsApi);

    return (
        <div {...rest}>
  
        </div>
    );
};

export default Blah;
