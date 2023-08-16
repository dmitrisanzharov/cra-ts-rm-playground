import React from "react";
import "./App.css";
import { Box } from "@mui/material";

// * COMPONENTS
import FleetPageDashboard from "./reactComponents/pages/FleetDashboardPage/FleetPageDashboard";
import Blah from "./components/Blah/Blah";

function App() {
    return (
        <Box sx={{ p: 3 }}>
            <FleetPageDashboard />
            {/* <hr />
            <Blah /> */}
        </Box>
    );
}

export default App;
