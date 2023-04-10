import React from 'react';
import pic from '../../assets/All Images/P3OLGJ1.png';
import JobsCat from '../JobsCat/JobsCat';

const Home = () => {
    return (
        <div >
            <div className='bg-slate-100'>
                <div className='md:flex px-8 mx-10 items-center  mb-4'>
                    <div className='w-1/2'>
                        <h2 className='text-7xl font-extrabold'>One Step Closer To Your <span className='text-cyan-500'> Dream Job</span></h2>
                        <p className='text-lg text-gray-500 my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='bg-indigo-500 rounded-md py-2 px-2 text-white font-bold'>Get Satrted</button>
                    </div>
                    <div>
                        <img src={pic} alt="" />
                    </div>
                </div>
            </div>

            <JobsCat></JobsCat>
        </div>

    );
};

export default Home;