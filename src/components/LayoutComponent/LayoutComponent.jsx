import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const LayoutComponent = props => {
    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
            >
                <Typography align="center" variant="h4">
                    Measurement Converter
                </Typography>
            </AppBar>
            <Box marginTop={10}>
                {props.children}
            </Box>
        </Box>
    );
};

export default LayoutComponent;
