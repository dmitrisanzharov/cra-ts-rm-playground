import React from 'react';
import { Box } from '@mui/material';

import ContextOneWrapper from 'src/context/contextOne';
import Blah from 'src/components/Blah/Blah';

function App() {
    return (
        <Box>
            <ContextOneWrapper nameProps={'Dmitri2'}>
                <Blah />
            </ContextOneWrapper>
        </Box>
    );
}

export default App;
