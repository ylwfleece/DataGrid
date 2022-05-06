import logo from "./logo.svg";
import "./App.css";
import AuraDataGrid from "./components/AuraDataGrid/AuraDataGrid";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="layout-left">
          <div className="layout-left__charts">
            <div className="chart"></div>
            <div className="chart"></div>
            <div className="chart"></div>
          </div>
          <div className="layout-left__table">
            <AuraDataGrid />
          </div>
        </div>
        <div className="layout-right">
          <div className="layout-right__calendars">
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
          </div>
          <div className="calendar__edit"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
