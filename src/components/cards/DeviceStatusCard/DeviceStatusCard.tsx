import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Skeleton,
    Typography,
} from '@mui/material';
interface DeviceStatusCardProps extends CardProps {
    numberOfRecords: number;
    loading: boolean;
    deviceStatus: {
        active: number;
        issue: number;
        disconnect: number;
        untracked: number;
        other: number;
    };
}
const DeviceStatusCard: React.FC<any> = ({
    numberOfRecords,
    loading,
    deviceStatus,
    ...rest
}) => (
    <Card {...rest}>
        <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
                Device Status
            </Typography>
            {!loading && (
                <Typography variant='body2' color='text.secondary'>
                    <pre>{JSON.stringify(deviceStatus, null, '\t')}</pre>
                </Typography>
            )}
            {loading && (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Skeleton variant='circular' height={220} width={220} />
                    <Skeleton height={25} width={120} />
                    <Skeleton height={25} width='100%' />
                </Box>
            )}
        </CardContent>
    </Card>
);
export default DeviceStatusCard;
