import React from "react";
import { SxProps, Box } from "@mui/material";
import * as styles from "./styles";

// COMPONENTS
// Cards
import AnomalyBreakdownCard from "src/components/cards/AnomalyBreakdownCard/AnomalyBreakdownCard";
import DeviceIssuesCard from "src/components/cards/DeviceIssuesCard/DeviceIssuesCard";
import DeviceStatusCard from "src/components/cards/DeviceStatusCard/DeviceStatusCard";
import NRMBreakdownCard from "src/components/cards/NRMBreakdownCard/NRMBreakdownCard";
import SelectableTreemapCard from "src/components/cards/SelectableTreemapCard/SelectableTreemapCard";
import UtilizationCard from "src/components/cards/UtilisationCard/UtilizationCard";

// -----------------------------------------------------
// --------  COMPONENT -------------------
// -----------------------------------------------------

type Props = {};

const FleetPageDashboard = (props: Props) => {
    return (
        <Box sx={styles.gridContainer}>
            {/* <UtilizationCard
                sx={styles.utilizationCardSx}
                // todo FAKE DATA, to remove
                numberOfRecords={677}
                statusAvailable={93}
                statusNRM={30}
                statusOnRent={554}
                statusOther={20}
                // loading={true}
                loading={false}
            /> */}
            <UtilizationCard
                sx={styles.utilizationCardSx}
                // todo FAKE DATA, to remove
                numberOfRecords={677}
                statusAvailable={93}
                statusNRM={30}
                statusOnRent={554}
                statusOther={20}
                // loading={true}
                loading={false}
            />
            <UtilizationCard
                sx={styles.utilizationCardSx}
                // todo FAKE DATA, to remove
                numberOfRecords={677}
                statusAvailable={93}
                statusNRM={30}
                statusOnRent={554}
                statusOther={20}
                // loading={true}
                loading={true}
            />
            {/* <NRMBreakdownCard loading={true} /> */}
            <DeviceStatusCard loading={true} />
            <DeviceIssuesCard loading={true} />
            <AnomalyBreakdownCard loading={true} />
            <SelectableTreemapCard loading={true} />
        </Box>
    );
};

export default FleetPageDashboard;
