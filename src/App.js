import logo from "./logo.svg";
import "./App.css";
import { DataGrid } from "@mui/x-data-grid";
import AuraProgressMeter from './AuraProgressMeter/AuraProgressMeter'
import CircularProgress from '@mui/material/CircularProgress';
import DataGridDemo from './DataGridDemo/DataGridDemo'
import Box from '@mui/material/Box';
import { useState } from 'react'
import { Margin } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <DataGridDemo />
    </div>
  );
}

export default App;
