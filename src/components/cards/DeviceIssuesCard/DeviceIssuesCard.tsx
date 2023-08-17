import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Skeleton,
    Typography,
} from "@mui/material";

interface DeviceIssuesCardProps extends CardProps {
    numberOfRecords: number;
    loading: boolean;
    deviceIssues: {
        [issue: string]: number;
    };
}
const DeviceIssuesCard: React.FC<any> = ({
    numberOfRecords,
    loading,
    deviceIssues,
    ...rest
}) => {
    loading = true;
    return (
        <Card {...rest}>
            <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                    Device Issues
                </Typography>
                {!loading && (
                    <Typography variant='body2' color='text.secondary'>
                        <pre>{JSON.stringify(deviceIssues, null, "\t")}</pre>
                    </Typography>
                )}
                {loading && (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Skeleton height={35} width='100%' />
                        <Skeleton height={25} width='50%' />
                        <Skeleton height={35} width='100%' />
                        <Skeleton height={25} width='50%' />
                        <Skeleton height={35} width='100%' />
                        <Skeleton height={25} width='50%' />
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default DeviceIssuesCard;
