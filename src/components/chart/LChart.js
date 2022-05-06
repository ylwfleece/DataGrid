import { LineChart, Line, Legend, Tooltip } from "recharts";
import { UserData, data } from "./UserData";
import ChartCard from "./ChartCard.js";

export default function LChart() {
  return (
    <ChartCard>
      <LineChart
        width={400}
        height={180}
        data={data}
        margin={{ right: 30, left: 30, bottom: 0, top: 10 }}
        style={{ backgroundColor: "#61caee" }}
      >
        <Legend
          verticalAlign="top"
          content={
            <div
              style={{
                color: "white",
                textAlign: "left",
              }}
            >
              <h3>{"350"}</h3>
              <p>{"Total Active Employees"}</p>
            </div>
          }
        />
        <Tooltip />
        <Line
          fillOpacity={1}
          stroke="white"
          dataKey="pv"
          fill="#61caee"
          activeDot={{ stroke: "red", fill: "red" }}
        />
      </LineChart>
    </ChartCard>
  );
}