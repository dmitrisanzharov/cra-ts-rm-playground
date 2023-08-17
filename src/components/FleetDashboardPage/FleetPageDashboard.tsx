import React from "react";
import { SxProps, Box } from "@mui/material";
import * as styles from "./styles";

// COMPONENTS
import UtilizationCard from "src/components/UtilisationCard/UtilizationCard";

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
                loading={true}
                // loading={false}
            />
        </Box>
    );
};

export default FleetPageDashboard;
