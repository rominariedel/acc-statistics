import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function StatisticsChart({ selectedStatistics }) {
  return (
    <BarChart
      data={selectedStatistics}
      width={1000}
      height={300}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="bar1" fill="#244661" />
      <Bar dataKey="bar2" fill="#80dbd2" />
      <Bar dataKey="bar3" fill="#bb61b9" />
    </BarChart>
  );
}

export default StatisticsChart;
