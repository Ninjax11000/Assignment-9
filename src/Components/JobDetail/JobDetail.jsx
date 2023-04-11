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
    const { description, responsibility, educational_Requirements, experiences, salary, title, phone, email, location } = detail ||{};

    return (
        <div >
            <div className='bg-slate-50 '>

                <h2 className='text-3xl font-bold pt-10 absolute left-1/2 '>Job Details</h2>
                <img src={banner} alt="" />

            </div>


            <div className='md:flex my-8 py-8 mx-8 px-8'>
                {/* description */}
                <div className='w-2/3 my-2'>
                    <p className='my-2'><span className='font-bold' >Job Description: </span>{description}</p>
                    <p className='my-2'><span className='font-bold'>Job Responsibility:</span>{responsibility}</p>
                    <h2 className='font-bold my-3'>Educational Requirements:</h2>
                    <p>{educational_Requirements}</p>
                    <h2 className='font-bold my-3'>Experiences:</h2>
                    <p>{experiences}</p>

                </div>

                {/* card */}
                <div>
                <div className='bg-slate-100 rounded-lg'>
                    <div className='mx-4'>
                        <h2 className='text-lg font-bold py-4'>Job Details</h2>
                        <hr className='border-1 border-gray-600' />
                    </div>
                    <div className='py-4 mx-4'>
                        <div className='flex gap-1 items-center my-2'>
                            <img className='w-5 h-5' src={sPic} alt="" />
                            <p className='text-lg'><span className='font-bold text-slate-600'>Salary:</span> {salary} Per Month</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <img className='w-5 h-5' src={jPic} alt="" />
                            <p className='text-lg'><span className='font-bold text-slate-600'>Job Title: </span>{title}</p>
                        </div>
                    </div>
                    <div className='mx-4 mb-2'>
                        <h2 className='text-lg font-bold pb-3'>Contact Information</h2>
                        <hr  className='border-1 border-gray-600'/>
                    </div>
                    <div className='mx-4 pb-6 my-2 '>
                        {/* phone */}
                        <div className='flex gap-1 mb-2 items-center'>
                            <img className='w-5 h-5' src={PPic} alt="" />
                            <p className='text-lg'><span className='font-bold text-slate-600'>Phone: </span>{phone}</p>
                        </div>
                        {/* email */}
                        <div className='flex gap-1 mb-2 items-center'>
                            <img className='w-5 h-5' src={EPic} alt="" />
                            <p className='text-lg'><span className='font-bold text-slate-600'>Email: </span>{email}</p>
                        </div>
                        {/* address */}
                        <div className='flex gap-1 items-center'>
                            <img className='w-5 h-5' src={APic} alt="" />
                            <p className='text-lg'><span className='font-bold text-slate-600'>Address: </span>{location}</p>
                        </div>
                    </div>
                    
                </div>
                <button className='bg-indigo-500 rounded-md py-2 px-2 mt-2 text-white font-bold text-lg w-full'>Apply now</button>
                </div>
                

            </div>




        </div>
    );
};

export default JobDetail;