import React from 'react';

const JobCard = ({job}) => {
    return (
        <div className='bg-slate-100 rounded-lg ps-3 py-6 pe-8  my-3 text-left md:w-1/4'> 
            <img src={job.logo} alt="" />
            <h2 className='text-lg font-bold'>{job.category}</h2>
            <p className='text-gray-500'>{job.available} jobs available</p>
        </div>
    );
};

export default JobCard;