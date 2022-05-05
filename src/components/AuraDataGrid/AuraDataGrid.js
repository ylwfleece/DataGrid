
import AuraProgressMeter, {getProgressColor} from '../AuraProgressMeter/AuraProgressMeter';
import { DataGrid } from "@mui/x-data-grid";
import calendarSvg from "../../assets/svg/data-grid/icn_hr_calendar.svg";
import reminderSvg from "../../assets/svg/data-grid/icn_reminder.svg";
import inviteSvg from "../../assets/svg/data-grid/icn_send-invite.svg";
import deleteSvg from "../../assets/svg/data-grid/icn_user-delete.svg";
import inactivateSvg from "../../assets/svg/data-grid/icn_user-inactivate.svg";

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
    renderCell: (e) => {
      return (
        <ul style={{color:getProgressColor(rows[e.id - 1].progress)}}>
          <li ><span>{rows[e.id - 1].status}</span></li>
        </ul>
      );
    },
  },
  {
    field: "progress",
    headerName: "Progress",
    width: 190,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: "lastcolumnSeparator",
    renderCell: (e) => {
      return <AuraProgressMeter value={rows[e.id - 1].progress} />;
    },
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

function AuraDataGrid() {
  return (
    <div className="dg-container">
      <div className="top-bar">
        <p style={{ color: "#27BBD8", fontWeight: "800" }}>
          On-boarding Progress
        </p>
        {/* <input className="search-name" placeholder="Search name"></input> */}
        <input className="search-name nosubmit" type="search" placeholder="Search name"></input>
        <div className="spacer"></div>
        <div className="top-bar-btns">
          <img src={calendarSvg} alt="calendar"></img>
          <img src={reminderSvg} alt="calendar"></img>
          <img src={inviteSvg} alt="calendar"></img>
          <img src={deleteSvg} alt="calendar"></img>
          <img src={inactivateSvg} alt="calendar"></img>

        </div>
      </div>
      <div
        style={{
          height: "760px",
          width: "1000px",
          backgroundColor: "#11619F",
          color: "white",
          borderRadius: "20px",
          marginTop: "50px",
        }}
      >
        <DataGrid 
          GridLinesVisibility="None"
          style={{ color: "white" }}
          rows={rows}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            border: 'none',
            "& .MuiDataGrid-row": {
              
              borderTopColor: "#2185B9",
              borderTopStyle: "solid",
            },
          }}
        />
      </div>
    </div>
  );
}

export default AuraDataGrid;
