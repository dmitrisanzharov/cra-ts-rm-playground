// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
import {
    RM_COLOR_BASE_GRAY_DARK_20,
    RM_COLOR_BASE_GRAY_LIGHT_90,
    RM_COLOR_BASE_RED,
    RM_COLOR_BASE_WHITE,
} from 'src/design-tokens/tokens.js';
import 'src/index.css';
import { t } from 'src/translation/index';
import milageAlertsApi from 'src/fakeApis/milageAlertsByVid';
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//
import BuildIcon from '@mui/icons-material/Build';
import WarningIcon from '@mui/icons-material/Warning';
import {
    Box,
    Card,
    CardContent,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Button,
} from '@mui/material';
import React from 'react';
import { DeleteButtonCellRenderer } from 'src/components/table/BasicTableComponents/DeleteButtonCellRenderer';
// import { useTranslation } from '@hooks/translation';
// import mileageAlertsApi from '@store/apis/v3/mileageAlerts';

// INTERFACES & TYPES
type Props = {};

interface AlertsData {
    id: number;
    name: string;
    mileage: number;
    threshold: number;
    user_id: string;
    remaining: number;
}

// COMPONENT

const NoDataComponent: React.FC<any> = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                py: 3,
            }}
        >
            <BuildIcon
                sx={{ color: RM_COLOR_BASE_RED, fontSize: '90px', mb: 2 }}
            />
            <Typography variant='body2'>
                {t('LABEL_MAINTENANCE_ALERTS_ERROR_TEXT')}
            </Typography>
        </Box>
    );
};

const LoadingComponent: React.FC<any> = () => {
    return (
        <Box
            className='drr'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 3,
            }}
        >
            <CircularProgress color='inherit' size='90px' />
        </Box>
    );
};

const MaintenanceAlertsCard: React.FC<any> = ({ ...rest }: Props) => {
    // API STUFF
    let loading = false;
    const tempVid = 29953;
    const finalData = milageAlertsApi?.data?.filter(el=> el.vid === tempVid)[0].data;


    // const { t } = useTranslation();

    const defaultCellAlign = 'center';

    loading = false;

    const buttonProps = {
        onClick: () => console.log('trigger delete'),
    };


    function viewMoreClick(){
        // TODO: need to change this
        window.open(
            'https://www.google.com',
            '_blank'
        );
    }

    return (
        <Box sx={{ width: '100%' }} {...rest}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 0,
                }}
            >
                <Box
                    sx={{
                        backgroundColor: RM_COLOR_BASE_GRAY_DARK_20,
                        pt: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: '10px',
                        pb: '20px'
                    }}
                >
                    <Typography
                        variant='h2'
                        sx={{
                            fontSize: '24px',
                            fontWeight: '400',
                            lineHeight: '32px',
                            color: 'white',
                        }}
                    >
                        {t('MAINTENANCE_ALERTS')}
                    </Typography>
                    <Button
                        sx={{
                            backgroundColor: RM_COLOR_BASE_WHITE,
                            color: RM_COLOR_BASE_GRAY_DARK_20,
                            '&:hover': {
                                backgroundColor: RM_COLOR_BASE_WHITE,
                                color: RM_COLOR_BASE_GRAY_DARK_20,
                            }
                        }}
                        onClick={viewMoreClick}
                    >
                        {t('VIEW_MORE')}
                    </Button>
                </Box>
                <CardContent sx={{padding: '0px', borderRadius: '0px', '&:last-child': {paddingBottom: '0px'}}}>
                    {loading && <NoDataComponent />}
                    {loading && <LoadingComponent />}
                    {!loading && (
                        <>
                            <TableContainer>
                                <Table>
                                    <TableHead
                                        sx={{
                                            backgroundColor:
                                                RM_COLOR_BASE_GRAY_LIGHT_90,
                                        }}
                                    >
                                        <TableRow>
                                            {[
                                                'Name',
                                                'Limit',
                                                'Remaining',
                                                '',
                                            ].map((header, idx) => {
                                                return (
                                                    <TableCell
                                                        align={
                                                            idx === 0
                                                                ? 'left'
                                                                : defaultCellAlign
                                                        }
                                                        key={header}
                                                        sx={{
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        {header}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {finalData.map((row: any) => {
                                            return (
                                                <TableRow
                                                    key={
                                                        row.id +
                                                        row.name +
                                                        row.user_id
                                                    }
                                                    sx={{
                                                        '&:last-child td, &:last-child th':
                                                            { border: 0 },
                                                    }}
                                                >
                                                    <TableCell
                                                        component='th'
                                                        scope='row'
                                                    >
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell
                                                        align={defaultCellAlign}
                                                    >
                                                        {/* THIS NEEDS TO USE: getConvertedDistanceString(10000, t, 'distance', true) FROM app/reactComponents/helpers/distanceAndSpeed.ts */}
                                                        {row.mileage.toLocaleString()}
                                                        km
                                                    </TableCell>
                                                    <TableCell
                                                        align={defaultCellAlign}
                                                    >
                                                        {row.remaining <=
                                                        row.threshold ? (
                                                            <>
                                                                <WarningIcon
                                                                    sx={{
                                                                        color: RM_COLOR_BASE_RED,
                                                                        position:
                                                                            'relative',
                                                                        top: '2px',
                                                                    }}
                                                                />{' '}
                                                                <span
                                                                    style={{
                                                                        color: RM_COLOR_BASE_RED,
                                                                        position:
                                                                            'relative',
                                                                        top: '-4px',
                                                                    }}
                                                                >
                                                                    {/* THIS NEEDS TO USE: getConvertedDistanceString(10000, t, 'distance', true) FROM app/reactComponents/helpers/distanceAndSpeed.ts */}
                                                                    {row.remaining.toLocaleString()}
                                                                    km
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                {/* THIS NEEDS TO USE: getConvertedDistanceString(10000, t, 'distance', true) FROM app/reactComponents/helpers/distanceAndSpeed.ts */}
                                                                {row.remaining.toLocaleString()}
                                                                km
                                                            </>
                                                        )}
                                                    </TableCell>

                                                    <DeleteButtonCellRenderer
                                                        {...rest}
                                                        buttonProps={
                                                            buttonProps
                                                        }
                                                        confirmationLabel={t(
                                                            'MARK_AS_COMPLETE_PROMPT'
                                                        )}
                                                        defaultIcon='addTask'
                                                        // TODO: loading={deleteOutput.isLoading}
                                                        // todo: failed={deleteOutput.isError}
                                                    />
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};

export default MaintenanceAlertsCard;

// old code

// const data: any = mileageAlertsApi.useGetMilageAlertsByVehicleVidQuery({});
// console.log('data', data);

// const data2: any = mileageAlertsApi.useGetMileageAlertQuery({});
// console.log("data2: ", data2);
