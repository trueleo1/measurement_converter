import React, { useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";

import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";

import { Paper } from "@mui/material";
import StaticMeasurementTable from "../StaticMeasurementTable/StaticMeasurementTable";
import CountrySelector from "../CountrySelector/CountrySelector";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8;

const GridView = ({ props }) => {
    const [base, setBase] = useState("UK");
    const [lists, setLists] = useState([
        {
            id: "1",
            title: "US"
        },
        {
            id: "2",
            title: "UK"
        },
        {
            id: "3",
            title: "Metric"
        }
    ]);

    const setStandard = country => {
        console.log(country);
        setBase(country);
    };

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEndMethod = result => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const tmplists = reorder(
            lists,
            result.source.index,
            result.destination.index
        );

        setLists(tmplists);
    };

    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: grid,
        width: "100"
    });

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,

        // change background colour if dragging
        background: isDragging ? "lightgreen" : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    return (
        <Box display="flex" justifyContent="center">
            <Box />
            <Box>
                <Box>
                    <CountrySelector setStandard={setStandard} base={base} />
                </Box>

                <Paper>
                    <Box m={3}>
                        <DragDropContext
                            onDragEnd={result => onDragEndMethod(result)}
                        >
                            <Droppable
                                droppableId="droppable"
                                direction="horizontal"
                            >
                                {(provided, snapshot) =>
                                    <Box
                                        component="div"
                                        display="flex"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={getListStyle(
                                            snapshot.isDraggingOver
                                        )}
                                    >
                                        {lists &&
                                            lists.map((item, index, array) =>
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) =>
                                                        <Box
                                                            component="div"
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided
                                                                    .draggableProps
                                                                    .style
                                                            )}
                                                        >
                                                            <StaticMeasurementTable
                                                                title={
                                                                    item.title
                                                                }
                                                            />
                                                        </Box>}
                                                </Draggable>
                                            )}
                                        {provided.placeholder}
                                    </Box>}
                            </Droppable>
                        </DragDropContext>
                    </Box>
                </Paper>

                {/* <StaticMeasurementTable 
                title='U.K.(Imperial)' 
                />
              

                
               
                <StaticMeasurementTable 
                title='Metrics'
                /> */}
            </Box>
        </Box>
    );
};

export default GridView;
