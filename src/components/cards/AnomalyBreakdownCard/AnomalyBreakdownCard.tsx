import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Skeleton,
    Typography,
} from "@mui/material";

/**
 * prop types for {@link AnomalyBreakdownCard}
 * @see AnomalyBreakdownCard
 */
interface AnomalyBreakdownCardProps extends CardProps {
    /**
     * Total number of vehicles in the analyzed fleet
     */
    numberOfRecords: number;
    /**
     * is the data fetching or being parsed?
     */
    loading: boolean;
    /**
     * key value pair for each stock anomaly
     *  where each anomaly type is given a quantaty,
     *  e.g. 'nrm not in a station': 12
     */
    anomalyBreakdown: {
        [anomaly: string]: number;
    };
}

/**
 * Component for showing a visiual component that represents a fleet or subsection of a fleets different anomalies and the relative scale.
 *
 * @component
 * @example
 * const numberOfRecords = 121
 * const loading = true
 * anomalyBreakdown: {
 *     'nrm not in a station': 22,
 *      'on rent but still in station': 44,
 *      'rental system says vehicle is elsewhere': 2
 *   }
 * return (
 *   <AnomalyBreakdownCard name={age} loading={name} anomalyBreakdown={anomalyBreakdown} />
 * )
 */

const AnomalyBreakdownCard: React.FC<any> = ({
    numberOfRecords,
    loading,
    anomalyBreakdown,
    ...rest
}) => {
    loading = true;
    return (
        <Card {...rest}>
            <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                    Anomalies
                </Typography>
                {!loading && (
                    <Typography variant='body2' color='text.secondary'>
                        <pre>
                            {JSON.stringify(anomalyBreakdown, null, "\t")}
                        </pre>
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

export default AnomalyBreakdownCard;
