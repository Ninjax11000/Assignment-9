import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-100'>
            <nav className='md:flex justify-between mx-10 px-8  items-center py-4  '>
                <Link to='/' className='text-3xl font-extrabold'>BuildCareer</Link>
                <div className='flex gap-4 my-2'>
                    <Link to='/statistics' className='text-lg font-bold text-slate-500 hover:text-blue-700'>Statistics</Link>
                    <Link to='/ajobs' className='text-lg font-bold text-slate-500  hover:text-blue-700'>Applied Jobs</Link>
                    <Link to='/blog' className='text-lg font-bold text-slate-500  hover:text-blue-700'>Blog</Link>
                </div>
                <Link to='/' className='text-lg text-white font-bold'><button className='bg-indigo-500 rounded-md py-2 px-2'>Start Applying</button></Link>
            </nav>
        </div>

    );
};

export default Header;