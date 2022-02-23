import React from "react";

import Box from "@mui/material/Box";
import { ButtonGroup, Button } from "@mui/material";

const GridView = ({ setStandard, base }) => {
    return (
        <Box display="flex" justifyContent="center">
            <ButtonGroup variant="contained">
                <Button
                    color={base === "US" ? "secondary" : "primary"}
                    onClick={() => setStandard("US")}
                >
                    U.S.
                </Button>
                <Button
                    color={base === "UK" ? "secondary" : "primary"}
                    onClick={() => setStandard("UK")}
                >
                    UK
                </Button>
                <Button
                    color={base === "Metric" ? "secondary" : "primary"}
                    onClick={() => setStandard("Metric")}
                >
                    Metric
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default GridView;
