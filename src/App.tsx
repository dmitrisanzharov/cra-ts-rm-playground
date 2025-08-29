import React from 'react';
import './App.css';
import { Box } from '@mui/material';

import Blah from 'src/components/Blah/Blah';
import MainContextWrapper from 'src/components/context';

import Context2 from 'src/components/context2';

import Context3 from 'src/components/context3/Context3';

function App() {
    return (
        <Box>
            <Blah />
            {/* <MainContextWrapper>
            </MainContextWrapper> */}
            {/* <Context2 /> */}
        </Box>
    );
}

export default App;