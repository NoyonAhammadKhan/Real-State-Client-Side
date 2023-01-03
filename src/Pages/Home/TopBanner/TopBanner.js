import React from 'react';
import Building from '../../../assets/images/hero-bg.jpg'
const TopBanner = () => {
    return (
        <div className='grid grid-cols-2'>
        <div className='mx-32 my-24 w-10/12'>
            <h1 className='mb-5 font-extrabold text-7xl text-left text-blue-600'> <span className='text-blue-900'>Modern</span> <br />Apartment <br /> House </h1>
            <p className='text-xl text-left'>We are providing you the world best housing estate.We are commited to <br /> give best places for you.</p>
            <div className='grid grid-cols-1 w-3/12 mt-3'>
               <button className="btn btn-outline btn-primary">Read More</button>
            </div>
            
        </div>
        <div className=''>
            <img className=' w-full' src={Building} alt="" />
        </div>
    </div>
    );
};

export default TopBanner;