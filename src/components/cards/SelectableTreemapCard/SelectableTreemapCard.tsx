import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardProps,
    Skeleton,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { t } from 'src/translation';
import TreemapChartProps from 'src/components/charts/TreemapChart/TreemapChart';

export interface SelectableTreemapCardProps extends CardProps {
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
    loading,
    allData,
    ...rest
}) => {
    //
    const TRANSLATED_CATEGORIES = t('LABEL_CATEGORIES').toUpperCase();
    const TRANSLATED_BRAND = t('LABEL_BRAND').toUpperCase();

    const [selectOptions, setSelectOptions] = React.useState<string>(
        TRANSLATED_CATEGORIES
    );

    const handleChange = (e: SelectChangeEvent) => {
        setSelectOptions(e.target.value);
    };

    const getLabelsFromAllData = React.useMemo(() => {
        return Object.keys(allData).map((label: string) => {
            if (label === 'categories') {
                return TRANSLATED_CATEGORIES;
            }

            return TRANSLATED_BRAND;
        });
    }, [allData, TRANSLATED_CATEGORIES, TRANSLATED_BRAND]);

    const dataForTreeMap: { [label: string]: number } = React.useMemo(() => {
        let label;

        if (selectOptions === TRANSLATED_CATEGORIES) {
            label = 'categories';
        }

        if (selectOptions === TRANSLATED_BRAND) {
            label = 'vehiclesByMake';
        }

        return (allData as any)[label ?? Object.keys(allData)[0]];
    }, [allData, selectOptions, TRANSLATED_CATEGORIES, TRANSLATED_BRAND]);

    loading = false;

    return (
        <Card {...rest}>
            <CardContent>
                <Box
                    // className='drr'
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography gutterBottom variant='h6' component='div'>
                        {t('AVAILABLE_VEHICLES')}
                    </Typography>
                    {loading && (
                        <Skeleton
                            variant='rectangular'
                            width={200}
                            height={30}
                            sx={{ borderRadius: '5px' }}
                        />
                    )}
                    {!loading && (
                        <FormControl sx={{ width: '20%' }}>
                            <Select
                                value={selectOptions}
                                onChange={handleChange}
                            >
                                {getLabelsFromAllData?.map(
                                    (label: string | undefined) => {
                                        return (
                                            <MenuItem value={label} key={label}>
                                                {label}
                                            </MenuItem>
                                        );
                                    }
                                )}
                            </Select>
                        </FormControl>
                    )}
                </Box>

                <TreemapChartProps loading={loading} data={dataForTreeMap} />
            </CardContent>
        </Card>
    );
};

export default SelectableTreemapCard;
