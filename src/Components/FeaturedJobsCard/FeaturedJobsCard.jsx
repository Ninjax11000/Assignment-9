import React from 'react';
import salary_logo from '../../assets/Icons/Frame.png';
import location_logo from '../../assets/Icons/Frame-4.png';

const FeaturedJobsCard = ({ fjob }) => {
    return (
        <div className='border-solid border-2 border-slate-400 rounded-lg text-left my-2'>
           <div className='ps-4 py-4 my-4 '>
           <img className='my-2' src={fjob.logo} alt="" />
            <h2 className='text-xl font-bold my-1'>{fjob.title}</h2>
            <h2 className='text-xl text-slate-400 my-1'>{fjob.company_name}</h2>
            <div className='flex gap-2 my-2'>
                <button className=' text-cyan-600 rounded-md py-1 px-1 border-sky-700 border-2'>{fjob.type}</button>
                <button className='text-cyan-600 rounded-md py-1 px-1 border-sky-700 border-2'>{fjob.time}</button>
            </div>
            <div className='flex gap-2 text-slate-700 my-2'>
                <div className='flex gap-1'>
                <img className='w-4 h-5' src={location_logo} alt="" />
                <p>{fjob.location}</p>
                </div>
                <div className='flex gap-1'>
                <img className='w-4 h-5' src={salary_logo} alt="" />
                <p>Salary: {fjob.salary}</p>
                </div>
             
            
            </div>

            <button className='bg-indigo-500 rounded-md py-2 px-2 mt-2 text-white font-bold text-lg'>View Details</button>
           </div>
        </div>
    );
};

export default FeaturedJobsCard;