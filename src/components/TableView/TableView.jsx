import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import UnitConvertedDisplay from "../UnitConvertedDisplay/UnitConvertedDisplay";
import MeasurementList from "../MeasurementList/MeasurementList";

import massOptions from "../../staticValues/massDropdownList.json";
import { TableCell, TableContainer, TableHead, TableRow, Typography, Table, TableBody } from "@mui/material";

const SingleConvertView = props => {
const [grams, setGrams] = useState(); 

    const addtoList=()=>{
        const tmpList = [...savedList];
        const newItem ={
            type:type,
            fromUnit:fromUnit,
            fromValue:fromValue,
            toUnit:toUnit,
            ingredient:ingredient
        }
        tmpList.push(newItem);
        setSavedList(tmpList);
    }

    return (
        <>
        <Box display="flex" justifyContent="center">
            <Box>
      <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>
                            <Typography>TableSpoon</Typography>
                      </TableCell>
                      <TableCell>
                            <Typography>TeaSpoon</Typography>
                      </TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                  <TableCell>
                            <Typography>TableSpoon</Typography>
                      </TableCell>
                      <TableCell>
                            <Typography>TeaSpoon</Typography>
                      </TableCell>
                  </TableRow>
              </TableBody>
          </Table>
      </TableContainer>
      </Box>
     </Box> 
     </>
    );
};

export default SingleConvertView;
