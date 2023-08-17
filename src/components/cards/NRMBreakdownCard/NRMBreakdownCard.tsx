import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Skeleton,
    Typography,
} from "@mui/material";

interface NRMBreakdownCardProps extends CardProps {
    numberOfRecords: number;
    loading: boolean;
    nrmBreakdown: { [nrmType: string]: number };
}
const NRMBreakdownCard: React.FC<any> = ({
    numberOfRecords,
    loading,
    nrmBreakdown,
    ...rest
}) => {
    return (
        <Card {...rest}>
            <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                    NRM Breakdown
                </Typography>
                {!loading && (
                    <Typography variant='body2' color='text.secondary'>
                        <pre>{JSON.stringify(nrmBreakdown, null, "\t")}</pre>
                    </Typography>
                )}
                {loading && (
                    <Box>
                        <Skeleton height={25} />
                        <Skeleton height={25} />
                        <Skeleton height={25} />
                        <Skeleton height={25} />
                        <Skeleton height={25} />
                        <Skeleton height={25} />
                        <Skeleton height={25} />
                        <Skeleton height={25} />
                        <Skeleton height={25} />
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};
export default NRMBreakdownCard;
