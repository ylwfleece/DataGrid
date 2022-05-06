import logo from "./logo.svg";
import "./App.css";
import AuraDataGrid from "./components/AuraDataGrid/AuraDataGrid";
import AuraCalendar from "./components/AuraCalendar/AuraCalendar";
import LChart from "./components/chart/LChart"
import AChart from "./components/chart/AChart"
import BChart from "./components/chart/BChart"
import AuraButton from "./components/AuraButton/AuraButton";


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
          <div className='layout-left__table'>
            <AuraDataGrid />
          </div>
        </div>
        <div className='layout-right'>
          <div className='layout-right__calendars'>
            <AuraCalendar />
            <AuraCalendar />
            <AuraCalendar />
            <AuraCalendar />
            <AuraCalendar />
          </div>
          <AuraButton
            size='small'
              variant='contained'
              fullWidth={true}
              sx={{
                width: '30%',
                color: 'white',
                marginBottom: '20px',
                flex: '0.4',
                borderRadius: '20px',
                backgroundColor: '#1e88bc',
              }}
            >
              Edit
            </AuraButton>
        </div>
      </div>
    </div>
  );
}

export default App;
