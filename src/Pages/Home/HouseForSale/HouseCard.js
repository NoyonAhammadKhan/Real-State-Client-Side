import React from 'react';
import House from '../../../assets/images/s-1.jpg'
const HouseCard = () => {
    return (
        <div>
            <div>
                <img className='w-11/12' src={House} alt="" />
            </div>
            <div>
                <h1 className='text-2xl text-left'>Apartment House</h1>
                <p className='text-left'>This is best Apartment</p>
            </div>
        </div>
    );
};

export default HouseCard;