import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";

const AppDrawer = props => {
    let navigate = useNavigate();

    const navigateTo = path => {
        navigate(`../${path}`, { replace: true });
    };

    return (
        <Drawer anchor="left" variant="permanent">
            <Box marginTop={5}>
                <MenuList>
                    <MenuItem onClick={() => navigateTo("Gridview")}>
                        Grid View
                    </MenuItem>
                    <MenuItem onClick={() => navigateTo("SingleView")}>
                        Single View
                    </MenuItem>
                    <MenuItem onClick={() => navigateTo("TableView")}>
                        Table View
                    </MenuItem>
                </MenuList>
            </Box>
        </Drawer>
    );
};

export default AppDrawer;
