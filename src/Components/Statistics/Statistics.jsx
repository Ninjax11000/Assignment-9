import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
const data01 = [
    { name: 'Assignmnet-1', value: 29 },
    { name: 'Assignment-2', value: 30 },
    { name: 'Assignment-3', value: 58 },
    { name: 'Assignment-4', value: 53 },
    { name: 'Assignment-5', value: 60 },
    { name: 'Assignment-6', value: 25 },
    { name: 'Assignment-7', value: 50 },
    { name: 'Assignment-8', value: 60 },
];

const Statistics = () => {
    return (
        <div className='text-center'>
            <h2 className='text-4xl font-bold'> My Assginment Mark Pie chart</h2>
            <div>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                />
                <Tooltip/>
            </PieChart>
            </div>
           
        </div>
    );
};

export default Statistics;