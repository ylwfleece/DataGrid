import logo from "./logo.svg";
import "./App.css";
import { DataGrid } from "@mui/x-data-grid";
import AuraProgressMeter from './AuraProgressMeter/AuraProgressMeter'
import CircularProgress from '@mui/material/CircularProgress';
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

const columns = [
  {
    field: "fullName",
    headerName: "Full Name",
    width: 190,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
  },
  {
    field: "jobRole",
    headerName: "Job Role",
    width: 190,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
  },
  {
    field: "status",
    headerName: "Status",
    width: 190,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
  },
  {
    field: "progress",
    headerName: "Progress",
    width: 190,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
    renderCell: (e) => {
      return <AuraProgressMeter value={rows[e.id-1].progress}/>
    }
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 190,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
  },
];

const rows = [
  {
    id: 1,
    fullName: "Hoaran Li",
    jobRole: "Java Developer",
    status: "New",
    progress: 0,
    dueDate: "23 October 2022",
  },
  {
    id: 2,
    fullName: "Peter Sun",
    jobRole: "React Developer",
    status: "Pending",
    progress: 90,
    dueDate: "18 November 2022",
  },
  {
    id: 3,
    fullName: "Jack Rabbit",
    jobRole: "Angular Developer",
    status: "Pending",
    progress: 20,
    dueDate: "23 October 2022",
  },
  {
    id: 4,
    fullName: "Tumi Sum",
    jobRole: "Java Developer",
    status: "Pending",
    progress: 80,
    dueDate: "18 November 2022",
  },
  {
    id: 5,
    fullName: "Eelee Brunson",
    jobRole: "React Developer",
    status: "Pending",
    progress: 20,
    dueDate: "23 October 2022",
  },
  {
    id: 6,
    fullName: "Sum Dillon",
    jobRole: "Angular Developer",
    status: "Pending",
    progress: 80,
    dueDate: "18 November 2022",
  },
  {
    id: 7,
    fullName: "Vince Crier",
    jobRole: "Java Developer",
    status: "Pending",
    progress: 20,
    dueDate: "23 October 2022",
  },
  {
    id: 8,
    fullName: "Tum Basco",
    jobRole: "React Developer",
    status: "Pending",
    progress: 90,
    dueDate: "18 November 2022",
  },
  {
    id: 9,
    fullName: "Ser Terir",
    jobRole: "Angular Developer",
    status: "Pending",
    progress: 20,
    dueDate: "23 October 2022",
  },
  {
    id: 10,
    fullName: "Tus Sommer",
    jobRole: "Java Developer",
    status: "Pending",
    progress: 90,
    dueDate: "18 November 2022",
  },
  {
    id: 11,
    fullName: "Emily Bunchin",
    jobRole: "React Developer",
    status: "Pending",
    progress: 20,
    dueDate: "23 October 2022",
  },
  {
    id: 12,
    fullName: "Ting Duzzo",
    jobRole: "Angular Developer",
    status: "Pending",
    progress: 80,
    dueDate: "18 November 2022",
  },
];

function DataGridDemo() {
  return (
    <div className="dg-container">
      <div
        style={{
          height: '600px',
          width: '1000px',
          backgroundColor: "#11619F",
          color: "white",
          borderRadius: "20px",
          marginTop: '50px'
        }}
      >
        <DataGrid
          style={{ color: "white" }}
          rows={rows}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default App;
