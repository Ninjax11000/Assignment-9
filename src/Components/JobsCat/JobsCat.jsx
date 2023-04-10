import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';

const JobsCat = () => {
    const [jobs, setJobs]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    console.log(jobs);
    
    return (
        <div  className='text-center mx-10 px-8'>
            <h2 className='text-5xl font-bold my-3'>Job Category List</h2>
            <p className='text-gray-500 py-1 my-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex justify-center gap-4 my-4'>
            {
                jobs.map(job=><JobCard key={job.id} job={job}></JobCard>)
            }
            </div>
            
        </div>
    );
};

export default JobsCat;