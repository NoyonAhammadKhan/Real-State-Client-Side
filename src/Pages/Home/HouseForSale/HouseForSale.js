import React from 'react';
import HouseCard from './HouseCard';

const HouseForSale = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-4xl font-bold'><span className='text-indigo-900'>|</span>House For Sale</h1>
            <p className='text-xl'>Here is the best home which we provide for you.</p>
            <div className='grid grid-cols-3 mt-10 ml-14'>
            <HouseCard></HouseCard>
            <HouseCard></HouseCard>
            <HouseCard></HouseCard>
            <HouseCard></HouseCard>
            <HouseCard></HouseCard>

            <HouseCard></HouseCard>
            <HouseCard></HouseCard>
            <HouseCard></HouseCard>
            <HouseCard></HouseCard>
            
        </div>
        <div className='w-full'>
                <button className="btn btn-outline btn-primary mx-auto mt-5">Find More</button>
        </div>
        </div>
    );
};

export default HouseForSale;