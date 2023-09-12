import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Skeleton,
    Typography,
} from '@mui/material';
import TreemapChartProps from 'src/components/charts/TreemapChart/TreemapChart';

export interface SelectableTreemapCardProps extends CardProps {
    numberOfRecords: number;
    loading: boolean;
    allData: {
        categories: {
            [anomaly: string]: number;
        };
        vehiclesByMake: {
            [make: string]: number;
        };
    };
}

const SelectableTreemapCard: React.FC<SelectableTreemapCardProps> = ({
    numberOfRecords,
    loading,
    allData,
    ...rest
}) => {
    loading = true;
    return (
        <Card {...rest}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '91%',
                }}
            >
                <Typography gutterBottom variant='h6' component='div'>
                    Catagories
                </Typography>
                <TreemapChartProps
                    numberOfRecords={numberOfRecords}
                    loading={loading}
                    allData={allData}
                    sx={{ display: 'flex', flex: 1 }}
                    className='dyy'
                />
            </CardContent>
        </Card>
    );
};

export default SelectableTreemapCard;
