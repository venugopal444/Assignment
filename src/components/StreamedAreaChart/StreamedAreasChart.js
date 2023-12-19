// import React from 'react'

// function StreamedAreasChart() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default StreamedAreasChart


// import React from 'react'

// function Sprintscharts() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Sprintscharts

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Sprintscharts = () => {
  const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 240 },
    { name: 'Feb', uv: 300, pv: 1398, amt: 221 },
    { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
    { name: 'May', uv: 189, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 349, pv: 4300, amt: 2100 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="amt" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Sprintscharts;

