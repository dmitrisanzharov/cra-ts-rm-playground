import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Skeleton,
    Typography,
} from "@mui/material";

interface SelectableTreemapCardProps extends CardProps {
    numberOfRecords: number;
    loading: boolean;
    catagories: {
        [anomaly: string]: number;
    };
}
const SelectableTreemapCard: React.FC<any> = ({
    numberOfRecords,
    loading,
    catagories,
    ...rest
}) => {
    loading = true;
    return (
        <Card {...rest}>
            <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                    Catagories
                </Typography>
                {!loading && (
                    <Typography variant='body2' color='text.secondary'>
                        <pre>{JSON.stringify(catagories, null, "\t")}</pre>
                    </Typography>
                )}
                {loading && (
                    <Box sx={{ display: "flex", height: "40vh" }}>
                        <Skeleton sx={{ display: "flex", flex: 1 }} />
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default SelectableTreemapCard;
