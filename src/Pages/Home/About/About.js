import React from 'react';
import AboutImg from '../../../assets/images/about-img.jpg'
const About = () => {
    return (
        <div className='flex items-center w-8/12 mx-auto mt-28 mb-28 '>
            <div className='w-3/6'>
                <img src={AboutImg} alt="" />
            </div>
            <div className='h-5/6 my-auto w-3/6'>
                <h1 className='text-4xl font-bold text-left'><span className='font-bold text-blue-800'>|</span>About Our Apartment</h1>
                <p className='text-xl text-left mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                <div className='w-3/12 grid grid-cols-1 mt-3'>
                    <button className="btn btn-outline btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default About;