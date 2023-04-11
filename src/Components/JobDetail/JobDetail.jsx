import React, { useEffect, useState } from 'react';
import banner from '../../assets/All Images/Vector.png';
import sPic from '../../assets/Icons/Frame.png';
import jPic from '../../assets/Icons/Frame-1.png';
import PPic from '../../assets/Icons/Frame-2.png';
import EPic from '../../assets/Icons/Frame-3.png';
import APic from '../../assets/Icons/Frame-4.png';



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
    const { description, responsibility, educational_Requirements, experiences, salary, title, phone, email, location } = detail;

    return (
        <div >
            <div className='bg-slate-50 '>

                <h2 className='text-3xl font-bold pt-10 absolute left-1/2 '>Job Details</h2>
                <img src={banner} alt="" />

            </div>


            <div className='flex'>
                {/* description */}
                <div className='w-2/3'>
                    {/* <p><span>Job Description: </span>{description}</p>
                    <p><span>Job Responsibility:</span>{responsibility}</p>
                    <h2>Educational Requirements:</h2>
                    <p>{educational_Requirements}</p>
                    <h2>Experiences:</h2>
                    <p>{experiences}</p> */}

                </div>

                {/* card */}
                <div>
                    <div>
                        <h2>Job Details</h2>
                        <hr />
                    </div>
                    <div>
                        <div className='flex'>
                            <img className='w-4 h-5' src={sPic} alt="" />
                            <p><span>Salary:</span> {salary} Per Month</p>
                        </div>
                        <div className='flex'>
                            <img className='w-4 h-5' src={jPic} alt="" />
                            <p><span>Job Title: </span>{title}</p>
                        </div>
                    </div>
                    <div>
                        <h2>Contact Information</h2>
                        <hr />
                    </div>
                    <div>
                        {/* phone */}
                        <div className='flex'>
                            <img className='w-4 h-5' src={PPic} alt="" />
                            <p><span>Phone: </span>{phone}</p>
                        </div>
                        {/* email */}
                        <div className='flex'>
                            <img className='w-4 h-5' src={EPic} alt="" />
                            <p><span>Email: </span>{email}</p>
                        </div>
                        {/* address */}
                        <div className='flex'>
                            <img className='w-4 h-5' src={APic} alt="" />
                            <p><span>Address: </span>{location}</p>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default JobDetail;