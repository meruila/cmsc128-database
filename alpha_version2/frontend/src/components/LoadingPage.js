import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const green = "#0D542F";

function LoadingPage() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '800px'}}>
            <CircularProgress color="success" size={150} />
        </Box>
    );
  }

  export default LoadingPage;