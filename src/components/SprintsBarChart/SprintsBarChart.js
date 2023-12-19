import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 3500,
    pv: 4000,
    amt: 2200,
  },
  {
    name: 'Page B',
    uv: 2800,
    pv: 1478,
    amt: 3210,
  },
  {
    name: 'Page C',
    uv: 3000,
    pv: 8700,
    amt: 1110,
  },
  {
    name: 'Page D',
    uv: 6775,
    pv: 4890,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 2450,
    pv: 3876,
    amt: 4576,
  },
  {
    name: 'Page F',
    uv: 6543,
    pv: 4532,
    amt: 3509,
  },
  {
    name: 'Page G',
    uv: 1348,
    pv: 2578,
    amt: 4327,
  },
];

const SprintsBarChart = () => {

  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={350}
          data={data}
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
          <Bar dataKey="pv" stackId="a" fill="#8874d8" />
          <Bar dataKey="amt" stackId="a" fill="#f0cd81" />
          <Bar dataKey="uv" fill="#d1c7b2" />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default SprintsBarChart;