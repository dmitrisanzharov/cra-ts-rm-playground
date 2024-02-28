import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
import { useCountIncrease, incCount2 } from './hooks';


type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {

    // const myString = <>{'Util for '}<br />{'yo'}</>;
    const myString = `test \b test`;

    return (
        <div {...rest}>
            {myString}
        </div>
    );
};

export default Blah;
