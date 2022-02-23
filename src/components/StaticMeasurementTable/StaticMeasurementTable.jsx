import React from "react";

import Box from "@mui/material/Box";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper
} from "@mui/material";
import UnitConvertedDisplay from "../UnitConvertedDisplay/UnitConvertedDisplay";

const StaticMeasurementTable = ({ title }) => {
    return (
        <Box width={200} m={1}>
            <Paper elevation={3}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6">
                                        {title}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <UnitConvertedDisplay
                                        fromUnit={"g"}
                                        fromValue={100}
                                        toUnit={"kg"}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1 Teaspoon</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1/2 Tablespoon</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1 TableSpoon</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default StaticMeasurementTable;
