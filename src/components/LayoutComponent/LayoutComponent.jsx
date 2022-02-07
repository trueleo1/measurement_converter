import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';


const LayoutComponent = ({props}) => {

    return(
        <Box>
        <AppBar position="static">
            <Typography align='center' variant='h3'>Measurement Converter</Typography>
        </AppBar>
        </Box>
    );
}

export default LayoutComponent;
