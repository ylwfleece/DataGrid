import { Hidden } from "@mui/material";
// import "./ChartCard.css";
export default function ChartCard(props) {
  return (
    <div
      className="chart-card"
      style={{
        backgroundColor: "white",
        borderRadius: 6,
        boxShadow: 2,
        width: "100%",
        height: "100%",
        marginBottom: 0,
        paddingBottom: 0,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* <article style={{ textAlign: "left", padding: 10 }}>
        <h2>Label</h2>
        <p>Some data</p>
      </article> */}
      {props.children}
    </div>
  );
}