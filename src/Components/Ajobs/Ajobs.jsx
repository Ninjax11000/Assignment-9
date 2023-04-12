import React, { useState } from 'react';
import { getShoppingCart } from '../../Utilities/Fakedb';
import { useLoaderData } from 'react-router-dom';
import banner from '../../assets/All Images/Vector.png';
import Ajob from '../Ajob/Ajob';

const Ajobs = () => {
  const aJobs = useLoaderData();
  const [cart, setCart] = useState(aJobs);
  console.log(cart);

  return (
    <div>

      <div className='bg-slate-50 '>

        <h2 className='text-3xl font-bold pt-10 absolute left-1/2 '>Applied Jobs</h2>
        <img src={banner} alt="" />

      </div>
      <div className='mx-10 my-10 px-8 '>
        {
          cart.map(job => <Ajob key={job.id}
            job={job}
          ></Ajob>)
        }
      </div>
    </div>
  );
};

export default Ajobs;