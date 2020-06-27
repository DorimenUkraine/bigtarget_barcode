import React from "react";
import { data } from "../data";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { elPurple, elBrown, elRed } from "constants/colors";

const getData = () => {
  const series = [
    {
      name: "actual",
      data: [],
    },
    {
      name: "x = y",
      data: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
      ],
    },
  ];

  const roc = data["adv_treatment"]["adv_validation_roc"];

  roc.x_model.forEach((x, i) => {
    series[0].data.push({
      x,
      y: roc.y_model[i],
    });
  });

  return series;
};

const Roc = ({ title, caption, description }) => {
  const series = getData();
  return (
    <div className="graph">
      <div className="title">{title}</div>
      <div className="plot">
        <LineChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" type="number" domain={[0, 1]} />
          <YAxis dataKey="y" />
          <Tooltip />
          <Legend />
          {series.map((s, i) => (
            <Line
              dot={false}
              dataKey="y"
              data={s.data}
              name={s.name}
              key={s.name}
              stroke={i === 0 ? elRed : elPurple}
              strokeDasharray={i !== 0 ? "5 5" : null}
            />
          ))}
        </LineChart>
      </div>
      <div className="caption">{caption}</div>
      <p className="description">{description}</p>
    </div>
  );
};

export default Roc;