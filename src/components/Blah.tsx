import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    return (
        <div>
            <Box>
                <Skeleton>
                    {' '}
                    <Typography>Hello</Typography>
                </Skeleton>
                <Typography>Hello</Typography>
            </Box>
        </div>
    );
};

export default Blah;
