import React from 'react';
import './App.css';
import { Box } from '@mui/material';

// * COMPONENTS
import FleetPageDashboard from 'src/components/pages/FleetDashboardPage/FleetPageDashboard';
import SideMenu from 'src/components/SideMenu/SideMenu';
import Blah from 'src/components/Blah';
import ChartTest from 'src/components/charts/ChartTest';

// * TanStack Table Examples
import BasicTable from 'src/components/table/BasicTable';
import HeaderGroupingTable from 'src/components/table/HeaderGroupingTable';
import SortedTable from 'src/components/table/SortedTable';
import GlobalFilteringTable from 'src/components/table/GlobalFilteringTable';
import ColumnFilteringTable from 'src/components/table/ColumnFilteringTable';
import GlobalFilteringTableWithDefaultColumn from 'src/components/table/GlobalFilteringTableWithDefaultColumn';
import PaginationTable from 'src/components/table/PaginationTable';
import RowSelectionTable from 'src/components/table/RowSelectionTable';
import ColumnOrderingTable from 'src/components/table/ColumnOrderingTable';
import HidingColumnsTable from 'src/components/table/HidingColumnsTable';
import FilteringColumnTableBasicInput from 'src/components/table/FilteringColumnTableBasicInput';

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
            {/* <Blah className='drr' /> */}
            <ChartTest />
            {/* <hr /> */}
            {/* <FleetPageDashboard /> */}

            {/* ============ TANSTACK TABLE ====================== */}
            {/* <BasicTable /> */}
            {/* <HeaderGroupingTable /> */}
            {/* <SortedTable /> */}
            {/* <GlobalFilteringTable /> */}
            {/* <ColumnFilteringTable /> */}
            {/* <GlobalFilteringTableWithDefaultColumn /> */}
            {/* <PaginationTable /> */}
            {/* <RowSelectionTable /> */}
            {/* <ColumnOrderingTable /> */}
            {/* <HidingColumnsTable /> */}
            {/* <FilteringColumnTableBasicInput /> */}
        </Box>
    );
}

export default App;
