import React from "react";
import "./App.css";
import { Box } from "@mui/material";

// * COMPONENTS
import FleetPageDashboard from "src/components/pages/FleetDashboardPage/FleetPageDashboard";

function App() {
    return (
        <Box sx={{ p: 3 }}>
            {/* <Blah /> */}
            {/* <hr /> */}
            <FleetPageDashboard />
        </Box>
    );
}

export default App;
