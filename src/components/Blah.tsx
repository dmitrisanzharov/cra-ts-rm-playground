import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';

type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {
    return <div {...rest}></div>;
};

export default Blah;
