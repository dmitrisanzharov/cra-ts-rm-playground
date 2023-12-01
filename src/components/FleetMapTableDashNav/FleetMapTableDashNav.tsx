// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
// @ts-ignore
import { t } from 'src/translation';
import { RM_COLOR_BASE_BLUE_LIGHT_80, RM_COLOR_BASE_BLUE_DARK_30, RM_COLOR_BASE_BLACK } from 'src/design-tokens/tokens';

// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//

import React from 'react';
import {
    Stack,
    IconButton,
    SxProps,
    FormControl,
    MenuItem,
    Select,
    Box,
    useMediaQuery,
    Theme,
    ToggleButton,
    ToggleButtonGroup,
    CircularProgress,
} from '@mui/material';
// import { useTranslation } from '../../hooks/translation';

import { MapOutlined, DonutLargeOutlined, ViewListOutlined } from '@mui/icons-material';
import { SelectedMenuItemSx } from './types';
import { fleetRegex, fleetDashRegex, mapRegex } from './fleetRegexTests';
// import { RM_COLOR_BASE_BLUE_LIGHT_80, RM_COLOR_BASE_BLUE_DARK_30, RM_COLOR_BASE_BLACK } from 'design-tokens';

type FleetMapTableDashNavProps = {};

// TODO: Remove these
const urlM = 'http://web.local.rentalmatics.com/#/map?stations=&stationGroups=&geoGroup=&geofence=';
const urlF = 'http://web.local.rentalmatics.com/#/fleet/?stations=&stationGroups=&geoGroup=&geofence=';
const urlD = 'http://web.local.rentalmatics.com/#/fleetdashboard?stations=&stationGroups=&geoGroup=&geofence=';


const FleetMapTableDashNav: React.FC<FleetMapTableDashNavProps> = ({ ...rest }) => {
    // const { t } = useTranslation();

    // const isScreenSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const isScreenSmall = useMediaQuery('(max-width:899px)');

    const selectedMenuItemSx: SelectedMenuItemSx = {
        color: RM_COLOR_BASE_BLUE_DARK_30,
        backgroundColor: RM_COLOR_BASE_BLUE_LIGHT_80,
    };


    const mapHref: string = '#/map';
    const mapMenuItemValue: string = 'On Map';

    const tableHref: string = '#/fleet';
    const tableMenuItemValue: string = 'As Table';

    const dashboardHref: string = '#/fleetdashboard';
    const dashMenuItemValue: string = 'As Dashboard'; 


    // const currentHref: string = window.location.hash;
    const currentHref: string = urlD;

    const isOnMapPage = mapRegex.test(currentHref);
    const isOnFleetPage = fleetRegex.test(currentHref);
    const isOnFleetDashboardPage = fleetDashRegex.test(currentHref);

    const defaultValueForSelect: string = isOnMapPage ? mapMenuItemValue : isOnFleetPage ? tableMenuItemValue : dashMenuItemValue;

    const [isOpen, setIsOpen] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);

    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            setRedirect(false);
        }, 1000);
        return () => clearTimeout(timeOut);
    }, [redirect]);




    // START OF HTML COMPONENT CODE
    if (redirect) {
        return <CircularProgress />;
    }

    if (isScreenSmall) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifySelf: 'flex-end',
                    m: 1,
                    marginLeft: 'auto',
                    alignSelf: 'flex-start',
                }}
                {...rest}
            >
                <FormControl sx={{ m: 1, minWidth: 131 }} size='small'>
                    <Select
                        labelId='demo-simple-select-filled-label'
                        id='demo-simple-select-filled'
                        value={defaultValueForSelect ?? mapMenuItemValue}
                        onChange={()=> setRedirect(true)}
                        style={isOpen ? selectedMenuItemSx : {}}
                        onOpen={() => setIsOpen(true)}
                        onClose={() => setIsOpen(false)}
                        displayEmpty
                        disabled={redirect}
                        renderValue={(selected: any) => <>{t('LABEL_VIEW')}...</>}
                    >
                        <MenuItem value={mapMenuItemValue} onClick={() => window.open(mapHref, '_self')} sx={isOnMapPage ? selectedMenuItemSx : {}}>
                            {t('BUTTON_TEXT_ON_MAP')}
                        </MenuItem>
                        <MenuItem value={tableMenuItemValue} onClick={() => window.open(tableHref, '_self')} sx={isOnFleetPage ? selectedMenuItemSx : {}}>
                            {t('BUTTON_TEXT_AS_TABLE')}
                        </MenuItem>
                        <MenuItem value={dashMenuItemValue} onClick={() => window.open(dashboardHref, '_self')} sx={isOnFleetDashboardPage ? selectedMenuItemSx : {}}>
                            {t('BUTTON_TEXT_AS_DASHBOARD')}
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        );
    }

    return (
        <ToggleButtonGroup
            exclusive
            onClick={() => setRedirect(true)}
            disabled={redirect}
            sx={{
                display: 'flex',
                justifySelf: 'flex-end',
                m: 1,
                marginLeft: 'auto',
                alignSelf: 'flex-start',
            }}
            {...rest}
        >
            <ToggleButton color='primary' value='map' selected={isOnFleetPage}>
                <MapOutlined />
            </ToggleButton>
            <ToggleButton color='primary' value='table' selected={isOnMapPage}>
                <ViewListOutlined />
            </ToggleButton>
            <ToggleButton color='primary' value='dashboard' selected={isOnFleetDashboardPage}>
                <DonutLargeOutlined />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default FleetMapTableDashNav;
