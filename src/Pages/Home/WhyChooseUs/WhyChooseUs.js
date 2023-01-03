import React from 'react';
import LocationAav from '../../../assets/images/u-1.png';
import WritingAav from '../../../assets/images/u-2.png';
import ManAav from '../../../assets/images/u-3.png';
import CashAav from '../../../assets/images/u-4.png';
const WhyChooseUs = () => {
    return (
        <div className='bg-indigo-900 mt-20 mb-20 h-[24rem]'> 
        <h1 className='text-5xl font-bold text-white mt-5 p-6'>|Why Choose Us</h1>
        <div className='w-6/12 mx-auto grid grid-cols-4 mt-16'>
        <div>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src={LocationAav} alt="" />
                    </div>
                    <div className='text-white mt-5'>
                        <h1 className='text-2xl font-extrabold'>1000+</h1>
                        <p className='text-xl'>House Per Year</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src={WritingAav} alt="" />
                    </div>
                    <div className='text-white mt-5'>
                        <h1 className='text-2xl font-extrabold'>20000+</h1>
                        <p className='text-xl'>Projects Develop</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src={ManAav} alt="" />
                    </div>
                    <div className='text-white mt-5'>
                        <h1 className='text-2xl font-extrabold'>10000+</h1>
                        <p className='text-xl'>Satisfied Customer</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src={CashAav} alt="" />
                    </div>
                    <div className='text-white mt-5'>
                        <h1 className='text-2xl font-extrabold'>1500+</h1>
                        <p className='text-xl'>Cheap Rates</p>
                    </div>
                </div>
            </div>
           
        </div>           
        </div>
    );
};

export default WhyChooseUs;