import React from 'react';
import MyLocation from '../../../components/MyLocation/MyLocation';
import ContactForm from './ContactForm';


const GetInTouch = () => {
    return (
        <div className='mt-20 '>
            <h1 className='font-bold text-4xl'><span className='text-indigo-900'>|</span>Get In Touch</h1>
            <div className='grid grid-cols-2 bg-indigo-900 mt-20'>
            
            <div>
                <MyLocation></MyLocation>
            </div>
            <div>
                <ContactForm></ContactForm>
            </div>
        </div>
        </div>
        
    );
};

export default GetInTouch;