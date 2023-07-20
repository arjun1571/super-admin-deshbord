import React  from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {  BsArrowDownShort } from 'react-icons/bs';

const Chart = ({value}) => {
    const data = [
        {
          name: '12 Aug',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '13',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '14',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '15',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '16',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '17',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '18',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className=' p-5'>
            <h1 className='text-4xl font-bold'>{value.name}</h1>
            <div className='lg:shadow-xl mt-4 p-10'>
                <div className='mb-4 flex '>
                    <div className='mr-10'>
                        <h1 className='text-2xl font-bold'>Users</h1>
                        <p className='text-4xl font-bold'>39</p>
                        <p className='flex items-center  text-red-600 font-bold'>9.93%</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>NewUsers</h1>
                        <p className='text-4xl font-bold'>34</p>
                        <div className='flex items-center  text-red-600 font-bold'>
                            <BsArrowDownShort />
                            <p>10.5%</p>
                        </div>
                    </div>
                </div>

            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            {/* <YAxis yAxisId="left" /> */}
            <YAxis yAxisId="right" orientation="right" />
            
            <Tooltip />
            <Legend />
            {/* <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
            <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#00AEFF"  />
            <Line yAxisId="right" type="monotone" dataKey="pv" stroke="#00AEFF"  strokeDasharray="5 5" />
            </LineChart>

                <p className='font-bold'>--Last 7 days - - Preaceding period</p>
                <p className='font-bold'>Last 7 days </p>
            </div>
         
        </div>
    );
};

export default Chart;