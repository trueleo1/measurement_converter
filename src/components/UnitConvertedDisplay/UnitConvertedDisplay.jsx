import React, { useState, useEffect } from "react";
import { mass, volume } from "units-converter";
import Box from "@mui/material/Box";
import { ButtonGroup, Button, Typography, Paper } from "@mui/material";
import MeaurementTypes from "../../enumerables/MeaurementTypes";

const UnitConvertedDisplay = ({ type, fromUnit, fromValue, toUnit, size }) => {
    const [value, setValue] = useState("");

    useEffect(
        () => {
            const getValue = () => {
                if (fromValue && fromUnit && toUnit) {
                    if (type === "mass") {
                        setValue(
                            mass(fromValue).from(fromUnit).to(toUnit).value
                        );
                    } else if (type === "volume") {
                        setValue(
                            volume(fromValue).from(fromUnit).to(toUnit).value
                        );
                    }
                }
            };
            getValue();
        },
        [fromUnit, fromValue, toUnit]
    );
    return (
        <Typography variant={size}>
            {`${value ? value : "0"} ${toUnit ? toUnit : "(units)"}`}
        </Typography>
    );
};

export default UnitConvertedDisplay;
