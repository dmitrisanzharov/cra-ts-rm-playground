import React from "react";
import "./App.css";
import { Box } from "@mui/material";

// context
import UseContextOne from "./components/UseContextOne";

// * TanStack Table Examples
import BasicTable from "src/components/table/BasicTable";
import HeaderGroupingTable from "src/components/table/HeaderGroupingTable";
import SortedTable from "src/components/table/SortedTable";
import GlobalFilteringTable from "src/components/table/GlobalFilteringTable";
import ColumnFilteringTable from "src/components/table/ColumnFilteringTable";
import GlobalFilteringTableWithDefaultColumn from "src/components/table/GlobalFilteringTableWithDefaultColumn";
import PaginationTable from "src/components/table/PaginationTable";
import RowSelectionTable from "src/components/table/RowSelectionTable";
import ColumnOrderingTable from "src/components/table/ColumnOrderingTable";
import HidingColumnsTable from "src/components/table/HidingColumnsTable";
import FilteringColumnTableBasicInput from "src/components/table/FilteringColumnTableBasicInput";

// * COMPONENTS
import FleetPageDashboard from "src/components/pages/FleetDashboardPage/FleetPageDashboard";
import SideMenu from "src/components/SideMenu/SideMenu";
import Blah from "src/components/Blah/Blah";
import BasicTreemapTestMessy from "src/components/charts/BasicTreeMapTest/BasicTreemapTestMessy";
import BasicTreemapGoodSample from "src/components/charts/BasicTreeMapTest/BasicTreemapGoodSample";
import MaintenanceAlertsCard from "src/components/cards/MaintenanceAlertsCard";
import Blah2 from "./components/Blah2";

function App() {
	const localStorageItemName = "iAfg4HrIUPmMEqd_isOpen";

	const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);

	function setSessionStorageFn() {
		const itemFromLocal = sessionStorage.getItem(localStorageItemName);
		if (itemFromLocal === "true") {
			sessionStorage.setItem(localStorageItemName, "false");
			setIsSideMenuOpen(false);
		} else {
			sessionStorage.setItem(localStorageItemName, "true");
			setIsSideMenuOpen(true);
		}
	}

	function loadTheTreeMapCDNScript() {
		const treeMapScriptExistsInWindow = document.getElementById("treeMapScript");

		if (treeMapScriptExistsInWindow) {
			return;
		}

		const addTreeMapScriptToWindow = document.createElement("script");
		addTreeMapScriptToWindow.setAttribute("src", "https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@0.2.3");
		addTreeMapScriptToWindow.setAttribute("id", "treeMapScript");
		document.head.appendChild(addTreeMapScriptToWindow);
	}

	React.useEffect(() => {
		setSessionStorageFn();
		loadTheTreeMapCDNScript();
	}, []);

	return (
		<Box>
			<UseContextOne>
				<Blah />
                <hr />
				<Blah2 />
			</UseContextOne>
		</Box>
	);
}

export default App;
