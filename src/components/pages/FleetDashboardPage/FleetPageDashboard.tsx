import React from 'react';
import { SxProps, Box } from '@mui/material';
import * as styles from './styles';

// COMPONENTS
// Cards
import AnomalyBreakdownCard from 'src/components/cards/AnomalyBreakdownCard/AnomalyBreakdownCard';
import DeviceIssuesCard from 'src/components/cards/DeviceIssuesCard/DeviceIssuesCard';
import DeviceStatusCard from 'src/components/cards/DeviceStatusCard/DeviceStatusCard';
import NRMBreakdownCard from 'src/components/cards/NRMBreakdownCard/NRMBreakdownCard';
import SelectableTreemapCard from 'src/components/cards/SelectableTreemapCard/SelectableTreemapCard';
import UtilizationCard from 'src/components/cards/UtilisationCard/UtilizationCard';

// -----------------------------------------------------
// --------  COMPONENT -------------------
// -----------------------------------------------------

type Props = {};

const FleetPageDashboard = (props: Props) => {
    return (
        <Box sx={styles.gridContainer}>
            <UtilizationCard
                sx={styles.utilizationCardSx}
                // todo FAKE DATA, to remove
                numberOfRecords={677}
                statusAvailable={93}
                statusNRM={30}
                statusOnRent={554}
                statusOther={0}
                // loading={true}
                loading={false}
            />
            {/* <UtilizationCard
                sx={styles.utilizationCardSx}
                // todo FAKE DATA, to remove
                numberOfRecords={677}
                statusAvailable={93}
                statusNRM={30}
                statusOnRent={554}
                statusOther={20}
                // loading={true}
                loading={true}
            /> */}
            <NRMBreakdownCard
                loading={true}
                numberOfRecords={677}
                nrmBreakdown={{
                    'SALES DEMO': 3,
                    'SERVICE IN PROGRESS': 1,
                    'MECHANICAL REPAIR IN PROGRESS': 8,
                    'WARRANTY RECALL': 8,
                    TYRES: 3,
                    'AWAITING DECISION': 2,
                    'TYRE TRACKING': 1,
                    'RUNNER - DEL/COL': 1,
                    'STAFF CARS': 6,
                    'PROBLEM - TO BE ADDRESSED': 7,
                    'DOE TEST': 2,
                    'BADLY CRASHED - POTENTIAL WRITE OFF': 2,
                }}
                rowsToDisplay={5}
            />
            <DeviceStatusCard loading={true} />
            <DeviceIssuesCard loading={true} />
            <AnomalyBreakdownCard loading={true} />
            <SelectableTreemapCard loading={true} />
        </Box>
    );
};

export default FleetPageDashboard;
