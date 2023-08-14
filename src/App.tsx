import React from "react";
import "./App.css";
import { Box } from "@mui/material";

// * COMPONENTS
import FleetPageDashboard from "./components/FleetPageDashboard";

function App() {
    return (
        <Box sx={{ p: 3 }}>
            <FleetPageDashboard />
        </Box>
    );
}

export default App;
