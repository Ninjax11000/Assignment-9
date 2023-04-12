import React from 'react';
import salary_logo from '/Frame.png';
import location_logo from '/Frame-4.png';
import { Link } from 'react-router-dom';

const Ajob = ({ job , onsite, remote}) => {
   
    return (

        <div  className={(!onsite &&  job.type==='Onsite'? 'hidden':'') || (!remote && job.type==='Remote'?'hidden':'')}>
            <div className='border-solid border-2 border-slate-400 rounded-lg text-left my-2'>
            <div className='ps-4 py-2 my-4 md:flex justify-between items-center'>
                <div className='flex'>
                    <div className='w-1/3 me-2 bg-slate-200 rounded-md '><img className='mt-16 mx-auto w-3/4 h-1/3' src={job.logo} alt="" /></div>
                    <div className='ms-2'>
                        <h2 className='text-xl font-bold my-1'>{job.title}</h2>
                        <h2 className='text-xl text-slate-400 my-1'>{job.company_name}</h2>
                        <div className='flex gap-2 my-2'>
                            <button className=' text-cyan-600 rounded-md py-1 px-1 border-sky-700 border-2'>{job.type}</button>
                            <button className='text-cyan-600 rounded-md py-1 px-1 border-sky-700 border-2'>{job.time}</button>
                        </div>
                        <div className='flex gap-2 text-slate-700 my-2'>
                            <div className='flex gap-1'>
                                <img className='w-4 h-5' src={location_logo} alt="" />
                                <p>{job.location}</p>
                            </div>
                            <div className='flex gap-1'>
                                <img className='w-4 h-5' src={salary_logo} alt="" />
                                <p>Salary: {job.salary}</p>
                            </div>


                        </div>
                    </div>
                </div>


                <Link to={`/jobdetails/${job.id}`}><button className='bg-indigo-500 rounded-md py-2 px-2 mt-2 me-4 text-white font-bold text-lg'>View Details</button></Link>


            </div>
        </div>

        </div>
    );
};

export default Ajob;