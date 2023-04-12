import React, { useState } from 'react';
import { getShoppingCart } from '../../Utilities/Fakedb';
import { useLoaderData } from 'react-router-dom';
import banner from '/Vector.png';
import Ajob from '../Ajob/Ajob';

const Ajobs = () => {
  const aJobs = useLoaderData();
  const [cart, setCart] = useState(aJobs);
  console.log(cart);
  const [onsite,setOnsite]=useState(true);
  const [remote,setRemote]=useState(true);

  const handleOnsite=()=>{
    setRemote(!remote);
    setOnsite(true);
  }

  const handleRemote=()=>{
    setOnsite(!onsite);
    setRemote(true);
  }

  return (
    <div>

      <div className='bg-slate-50 '>

        <h2 className='text-3xl font-bold pt-10 absolute left-1/2 '>Applied Jobs</h2>
        <img src={banner} alt="" />

      </div>
      <div className='text-end me-8 pe-6'>
        <button onClick={handleOnsite} className='bg-indigo-500 rounded-md py-2 px-2 mx-2 my-2 text-white'>Onsite</button>
        <button onClick={handleRemote}className='bg-indigo-500 rounded-md py-2 px-2 mx-2 my-2 text-white'>Remote</button>
      </div>
      <div className='mx-10 my-10 px-8 '>
        {
          cart.map(job => <Ajob key={job.id}
            job={job}
            onsite={onsite}
            remote={remote}
          ></Ajob>)
        }
      </div>
    </div>
  );
};

export default Ajobs;