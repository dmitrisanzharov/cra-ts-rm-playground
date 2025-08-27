import React from 'react';
import './App.css';
import { Box } from '@mui/material';

import Blah from 'src/components/Blah/Blah';
import MainContextWrapper from 'src/components/context';

import Context2 from 'src/components/context2';

function App() {
    return (
        <Box>
            {/* <MainContextWrapper>
                <Blah />
            </MainContextWrapper> */}
            <Context2 />
        </Box>
    );
}

export default App;