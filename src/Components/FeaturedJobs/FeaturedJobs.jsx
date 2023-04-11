import React, { useEffect, useState } from 'react';
import FeaturedJobsCard from '../FeaturedJobsCard/FeaturedJobsCard';

const FeaturedJobs = () => {
    const [showAll, setShowAll] = useState(false);
    const hnadleShowAll = () => {
        setShowAll(true);
    };

    const [fjobs, setFJobs] = useState([]);
    useEffect(() => {
        fetch('Jobs.json')
            .then(res => res.json())
            .then(data => setFJobs(data))
    }, [])
    console.log(fjobs);
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-5xl font-bold my-3'>Featured Jobs</h2>
            <p className='text-gray-500 py-1 my-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            
            <div className='text-center mx-10 px-8 md:grid grid-cols-2 gap-4 '>
                {

                    fjobs?.slice(0, showAll ? 6 : 4).map(fjob => <FeaturedJobsCard key={fjob.id}
                        fjob={fjob}
                    ></FeaturedJobsCard>)
                }


            </div>
            <div className='text-center'>
                {!showAll && (
                    <span onClick={hnadleShowAll}>
                        <button className='bg-indigo-500 rounded-md py-2 px-2 mt-2 text-white font-bold text-lg'>See All Jobs</button>
                    </span>
                )}
            </div>


        </div>

    );
};

export default FeaturedJobs;