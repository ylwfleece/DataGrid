import logo from "./logo.svg";
import "./App.css";
import AuraDataGrid from "./components/AuraDataGrid/AuraDataGrid";
import Calendar from "./components/Calendar/Calendar";
import LChart from "./components/chart/LChart"
import AChart from "./components/chart/AChart"
import BChart from "./components/chart/BChart"


function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="layout-left">
          <div className="layout-left__charts">
            <div className="chart"><LChart style={{height: '100%', width: '100%'}}/></div>
            <div className="chart"><AChart /></div>
            <div className="chart"><BChart /></div>
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
