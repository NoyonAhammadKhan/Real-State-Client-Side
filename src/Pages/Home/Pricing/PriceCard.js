import React from 'react';

const PriceCard = () => {
    return (
        <div className='h-[30rem] w-[24rem] m-10'>
            <div className='h-[7rem] bg-blue-800'>
                <h1 className='text-4xl font-bold text-white pt-4'>01</h1>
                <p className='text-2xl font-bold text-bold text-white'>Basic</p>
            </div>
            <div className='h-4/6 bg-blue-600 text-white'>
                <h1 className='text-4xl font-bold pt-5'>10000$</h1>
                <div className='bg-white h-1 w-[4rem] mx-auto'></div>
                <div className='mt-5 text-left mx-auto w-2/6'>
                    <ul className='list-disc tex-xl font-bold'>
                        <li>Reliable</li>
                        <li>Trusworthy</li>
                        <li>Cost Savings</li>
                        <li>Great Living</li>
                        <li>Easy EMI</li>
                        <li>Easy Installment</li>
                    </ul>
                   
                </div>
            </div>
        </div>
    );
};

export default PriceCard;