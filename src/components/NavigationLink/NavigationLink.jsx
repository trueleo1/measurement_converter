import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const NavigationLink = props => {
    let navigate = useNavigate();

    const navigateTo = path => {
        navigate(`../${path}`, { replace: true });
    };
    return (
        <Box>
            <Typography />
        </Box>
    );
};

export default NavigationLink;
