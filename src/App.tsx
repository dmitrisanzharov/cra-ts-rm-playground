import React from 'react';
import './App.css';
import { Box } from '@mui/material';

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

// * COMPONENTS
import FleetPageDashboard from 'src/components/pages/FleetDashboardPage/FleetPageDashboard';
import SideMenu from 'src/components/SideMenu/SideMenu';
import Blah from 'src/components/Blah/Blah';
import BasicTreemapTestMessy from 'src/components/charts/BasicTreeMapTest/BasicTreemapTestMessy';
import BasicTreemapGoodSample from 'src/components/charts/BasicTreeMapTest/BasicTreemapGoodSample';
import MaintenanceAlertsCard from 'src/components/cards/MaintenanceAlertsCard';

// * REVISION
import BasicTableRev1 from 'src/components/tableRevision/BasicTableRev1';
import SortTable1 from 'src/components/tableRevision/SortTable1'; 
import GlobalFilterTable from 'src/components/tableRevision/GlobalFilterTable'; 
import ColumnFilteringTable2 from 'src/components/tableRevision/ColumnFilteringTable';
import ColumnFilterPerColumn from 'src/components/tableRevision/ColumnFilterPerColumn';
import PaginationTable1 from 'src/components/tableRevision/PaginationTable1';
import RowSelectionTable1 from 'src/components/tableRevision/RowSelectionTable';
import ColumnOrdering1 from 'src/components/tableRevision/ColumnOrdering1';
import GetFacetedValues from 'src/components/tableRevision/GetFacetedValues';
import ColumnVisibility1 from 'src/components/tableRevision/ColumnVisibility1';
import GroupTable1 from 'src/components/tableRevision/GroupTable1';
import BasicTablePlayGround from 'src/components/tableRevision/BasicTablePlayGround';



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

    function loadTheTreeMapCDNScript() {
        const treeMapScriptExistsInWindow =
            document.getElementById('treeMapScript');

        if (treeMapScriptExistsInWindow) {
            return;
        }

        const addTreeMapScriptToWindow = document.createElement('script');
        addTreeMapScriptToWindow.setAttribute(
            'src',
            'https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@0.2.3'
        );
        addTreeMapScriptToWindow.setAttribute('id', 'treeMapScript');
        document.head.appendChild(addTreeMapScriptToWindow);
    }

    React.useEffect(() => {
        setSessionStorageFn();
        loadTheTreeMapCDNScript();
    }, []);

    return (
        <Box
            sx={{
                py: 3,
                position: 'relative',
                // paddingLeft: `${isSideMenuOpen ? 345 : 113}px`,
                paddingLeft: '25px',
                paddingRight: '15px',
            }}
        >
            {/* <SideMenu
                sideMenuControl={setSessionStorageFn}
                isSideMenuOpen={isSideMenuOpen}
            /> */}

            {/* <Box className='' sx={{width: '862px'}}>
                <MaintenanceAlertsCard />
            </Box> */}
           
            {/* <Blah className='drr' /> */}
            {/* <BasicTreemapTestMessy /> */}
            {/* <BasicTreemapGoodSample /> */}
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

            {/* =============== TAN STACK REVISION 4 =============== */}
            {/* <BasicTableRev1 /> */}
            {/* <SortTable1 /> */}
            {/* <GlobalFilterTable /> */}
            {/* <ColumnFilteringTable2 /> */}
            {/* <ColumnFilterPerColumn /> */}
            {/* <PaginationTable1 /> */}
            {/* <RowSelectionTable1 /> */}
            {/* <ColumnOrdering1 /> */}
            {/* <GetFacetedValues /> */}
            {/* <ColumnVisibility1 /> */}
            {/* <GroupTable1 /> */}
            <BasicTablePlayGround />
        </Box>
    );
}

export default App;
