import React from "react";
import "./App.css";
import { Box } from "@mui/material";

// * COMPONENTS
import FleetPageDashboard from "./components/FleetPageDashboard";
import Blah from "./components/Blah/Blah";

function App() {
    return (
        <Box sx={{ p: 3 }}>
            <FleetPageDashboard />
            {/* <Blah /> */}
        </Box>
    );
}

export default App;
