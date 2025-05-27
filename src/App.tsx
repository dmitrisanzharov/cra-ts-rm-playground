import React from 'react';
import './App.css';
import { Box } from '@mui/material';

import Blah from 'src/components/Blah/Blah';
import TableVirtualisation from 'src/components/table/TableVirtualisation';

function App() {
    return (
        <Box>
            <TableVirtualisation />
        </Box>
    );
}

export default App;
