import React, { useState, useEffect } from "react";
import { mass, volume } from "units-converter";
import Box from "@mui/material/Box";
import {
    ButtonGroup,
    Button,
    Typography,
    Paper,
    ListItem,
    List
} from "@mui/material";
import MeaurementTypes from "../../enumerables/MeaurementTypes";
import UnitConvertedDisplay from "../UnitConvertedDisplay/UnitConvertedDisplay";

const MeasurementList = ({ list }) => {
    return (
        <Box>
            <Paper elevation={1}>
                <List>
                    {list &&
                        list.map((item, index) =>
                            <ListItem key={index}>
                                {`
                                ${item.fromValue ? item.fromValue : ""}
                                ${item.fromUnit ? item.fromUnit : ""}
                                = \u00A0`}
                                <UnitConvertedDisplay
                                    type={item.type}
                                    fromUnit={item.fromUnit}
                                    fromValue={item.fromValue}
                                    toUnit={item.toUnit}
                                />
                                {`\u00A0${item.ingredient
                                    ? item.ingredient
                                    : ""}`}
                            </ListItem>
                        )}
                </List>
            </Paper>
        </Box>
    );
};

export default MeasurementList;
