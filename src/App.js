import logo from './logo.svg';
import './App.css';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  return (
    <div className="App">
      <DataGridDemo />
    </div>
  );
}

const columns = [
  { field: 'fullName', headerName: 'Full Name', width: 150 },
  {
    field: 'jobRole',
    headerName: 'Job Role',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
  },
  {
    field: 'progress',
    headerName: 'Progress',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'dueDate',
    headerName: 'Due Date',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160
  },
];

const rows = [
  { id: 1, fullName: "Hoaran Li", jobRole: 'Java Developer', status: 'New', progress: 35, dueDate: "a" },
  { id: 2, fullName: "Peter Sun", jobRole: 'React Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 3, fullName: "Jack Rabbit", jobRole: 'Angular Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 4, fullName: "Tumi Sum", jobRole: 'Java Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 5, fullName: "Eelee Brunson", jobRole: 'React Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 6, fullName: "Sum Dillon", jobRole: 'Angular Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 7, fullName: "Vince Crier", jobRole: 'Java Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 8, fullName: "Tum Basco", jobRole: 'React Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 9, fullName: "Ser Terir", jobRole: 'Angular Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 10, fullName: "Tus Sommer", jobRole: 'Java Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 11, fullName: "Emily Bunchin", jobRole: 'React Developer', status: 'Pending', progress: 35, dueDate: "a" },
  { id: 12, fullName: "Ting Duzzo", jobRole: 'Angular Developer', status: 'Pending', progress: 35, dueDate: "a" },
];

function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default App;
