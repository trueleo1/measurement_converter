import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import UnitConvertedDisplay from "../UnitConvertedDisplay/UnitConvertedDisplay";
import MeasurementList from "../MeasurementList/MeasurementList";

import massOptions from "../../staticValues/massDropdownList.json";

const SingleConvertView = props => {
   const [type, setType] = useState("mass");

    const [fromUnit, setFromUnit] = useState("");
    const [fromValue, setFromValue] = useState(1);
    const [toUnit, setToUnit] = useState("");
    const [ingredient, setIngredient] = useState("");

    const [savedList, setSavedList] = useState([]);

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
        <Box flexBasis={100}>
                <TextField
                    label="From Units"
                    onChange={event => {
                        if(event?.target?.value){
                        setFromValue(event?.target?.value);
                        }
                    }}
                    value={fromValue}
                />
            </Box>
            <Box flexBasis={50}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={massOptions.options}
                    sx={{ width: 300 }}
                    
                    onChange={(event, value) => {
                        setFromUnit(value?.value);
                    }}
                    renderInput={params =>
                        <TextField {...params} label="From What" />}
                />
            </Box>
          
             <Box flexbasis={200}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={massOptions.options}
                    sx={{ width: 300 }}
                    onChange={(event, value) => {
                        setToUnit(value.value);
                    }}
                    renderInput={params =>
                        <TextField {...params} label="To What" />}
                />
            </Box>
     </Box>
     <Box m={1} display="flex" justifyContent="center" alignItems='center'>
         <Box m={1}>
            <UnitConvertedDisplay
                type="mass"
                fromUnit={fromUnit}
                fromValue={fromValue}
                toUnit={toUnit}
                size='h6'
            />
            </Box> 
            <Box m={1}>
             <TextField
                    label="Ingredient"
                    onChange={event => {
                        if(event?.target?.value){
                        setIngredient(event?.target?.value);
                        }
                    }}
                    value={ingredient}
                />
                </Box>
                <Box>
                <Button onClick={() =>addtoList()}>Save</Button>

                </Box>
     </Box>
     <Box display="flex" justifyContent="center">
     <Box>
           <MeasurementList
           list={savedList} />
     </Box>
     </Box> 
     </>
    );
};

export default SingleConvertView;
