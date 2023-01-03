import React from 'react';
import PriceCard from './PriceCard';

const Pricing = () => {
    return (
        <div className='mt-20 mb-20'>
            <div>
            <h1 className='text-center text-4xl font-bold'>Our Pricing</h1>
            <p>We provide great home with best price</p>
            </div>
            <div className='w-8/12 mx-auto'>
            <div className='grid grid-cols-3 gap-3  mx-auto'>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
            </div>
            </div>
           
        </div>

    );
};

export default Pricing;