import React from 'react';
import './App.css';
import { Box } from '@mui/material';

// * COMPONENTS
import FleetPageDashboard from 'src/components/pages/FleetDashboardPage/FleetPageDashboard';
import SideMenu from 'src/components/SideMenu/SideMenu';
import Blah from 'src/components/Blah';

// TanStack Table Examples
import BasicTable from 'src/components/table/BasicTable';
import SortedTable from 'src/components/table/SortedTable';
import GlobalFilteringTable from 'src/components/table/GlobalFilteringTable';

function App() {
    const localStorageItemName = 'iAfg4HrIUPmMEqd_isOpen';

    const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);

    function setSessionStorageFn() {
        const itemFromLocal = sessionStorage.getItem(localStorageItemName);
        if (itemFromLocal === 'true') {
            sessionStorage.setItem(localStorageItemName, 'false');
            setIsSideMenuOpen(false);
        } else {
            sessionStorage.setItem(localStorageItemName, 'true');
            setIsSideMenuOpen(true);
        }
    }

    React.useEffect(() => {
        setSessionStorageFn();
    }, []);

    return (
        <Box
            sx={{
                py: 3,
                position: 'relative',
                paddingLeft: `${isSideMenuOpen ? 345 : 113}px`,
                paddingRight: '15px',
            }}
        >
            <SideMenu
                sideMenuControl={setSessionStorageFn}
                isSideMenuOpen={isSideMenuOpen}
            />
            {/* <Blah /> */}
            {/* <hr /> */}
            {/* <FleetPageDashboard /> */}

            {/* TANSTACK TABLE */}
            {/* <BasicTable /> */}
            {/* <SortedTable /> */}
            <GlobalFilteringTable />
        </Box>
    );
}

export default App;
