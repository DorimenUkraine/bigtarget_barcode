import React from "react";
import { data } from "../data";
import round from "utils/round";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const d = [
  {
    name: "axis",
    control: round(data["Bar chart"].control, 6),
    test: round(data["Bar chart"].test, 6),
  },
];

const MyBarChart = ({ title, caption, description }) => {
  return (
    <div className="graph">
      <div className="title">{title}</div>
      <div className="plot">
        <BarChart
          width={500}
          height={300}
          data={d}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="control" stackId="control" fill="#8884d8" />
          <Bar dataKey="test" stackId="test" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="caption">{caption}</div>
      <p className="description">{description}</p>
    </div>
  );
};

export default MyBarChart;
