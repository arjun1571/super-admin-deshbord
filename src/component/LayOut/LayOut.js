import React from 'react';
import { BiHomeAlt  } from 'react-icons/bi';
import {  AiOutlineUser } from 'react-icons/ai';

import logo from "../../asset/engineer.png"
import Chart from '../Chart/Chart';

const LayOut = () => {
    const data = [
        {
            id:1,
            name:"Contractors"

        },
        {
            id:2,
            name:"User"

        }
    ]
    return (
        <div class="grid grid-cols-12 gap-4">
            <div class=" lg:col-span-2 col-span-3">
                <div className='items-center'>
                    <BiHomeAlt className='lg:w-20 w-10 bg-[#3f8825] bg-opacity-[31%] rounded-lg  lg:h-16 h-10 p-2' />
                    <h1>Dashbord</h1>
                </div>
                <div className='mt-10 items-center'>
                    <img src={logo} className='lg:w-20 w-10  rounded-lg  lg:h-16 h-10 p-2' alt="" />
                    <h1>Contractors</h1>
                </div>
                <div className='mt-10 items-center'>
                    <AiOutlineUser className='lg:w-20 w-10 rounded-lg  lg:h-16 h-10 p-2' />
                    <h1 className=' lg:mx-5' >User</h1>
                </div>
            </div>
            <div class="lg:col-span-10 col-span-9">
                <div className='lg:flex md:flex gap-10'>
                {
                    data?.map(data=> <Chart key={data.id} value={data}></Chart>)
                }
                </div>
            </div>
        </div>
    );
};

export default LayOut;