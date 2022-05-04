import logo from "./logo.svg";
import "./App.css";
import { DataGrid } from "@mui/x-data-grid";

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
    width: 150,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
  },
  {
    field: "jobRole",
    headerName: "Job Role",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
  },
  {
    field: "progress",
    headerName: "Progress",
    type: "number",
    width: 110,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
    // editable: true,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 160,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'lastcolumnSeparator',
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
    progress: 0,
    dueDate: "23 October 2022",
  },
  {
    id: 6,
    fullName: "Sum Dillon",
    jobRole: "Angular Developer",
    status: "Pending",
    progress: 90,
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
    progress: 80,
    dueDate: "18 November 2022",
  },
  {
    id: 9,
    fullName: "Ser Terir",
    jobRole: "Angular Developer",
    status: "Pending",
    progress: 0,
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
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default App;
