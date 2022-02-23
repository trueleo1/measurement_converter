import React, { Component, useState } from "react";
import "./App.css";
import LayoutComponent from "./components/LayoutComponent/LayoutComponent";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GridView from "./components/GridView/GridView";
import Box from "@mui/material/Box";
import SingleConvertView from "./components/SingleConvertView/SingleConvertView";
import TableView from "./components/TableView/TableView";

class App extends Component {
    render() {
        return (
            <LayoutComponent>
                <Router>
                    <AppDrawer />
                    <Routes>
                        <Route path="/GridView" element={<GridView />} />
                        <Route
                            path="/SingleView"
                            element={<SingleConvertView />}
                        />
                        <Route path="/TableView" element={<TableView />} />
                    </Routes>
                </Router>
            </LayoutComponent>
        );
    }
}

export default App;
