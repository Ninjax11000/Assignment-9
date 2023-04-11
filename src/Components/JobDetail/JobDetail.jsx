import React, { useEffect, useState } from 'react';
import banner from '../../assets/All Images/Vector.png';
import sPic from '../../assets/Icons/Frame.png';
import jPic from '../../assets/Icons/Frame-1.png';


const JobDetail = () => {
    const [details, setDetails] = useState([]);
    let url;
    useEffect(() => {
        fetch('../../../public/Jobs.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    url = window.location.href;
    const array = url.split('/');

    const lastsegment = (array[array.length - 1]);

    const detail = details.find(detail => detail.id === lastsegment);
    console.log(detail);

    return (
        <div >
            <div className='bg-slate-50 '>

                <h2 className='text-3xl font-bold pt-10 absolute left-1/2 '>Job Details</h2>
                <img src={banner} alt="" />

            </div>

            
            <div>
                {/* description */}
                <div>
                    <p><span>Job Description: </span>{detail.description}</p>
                </div>

                {/* card */}
                <div>

                </div>

            </div>

          


        </div>
    );
};

export default JobDetail;