import React from 'react';

import About from '../About/About';
import Footer from '../Footer/Footer';
import GetInTouch from '../GetInTouch/GetInTouch';
import HouseForSale from '../HouseForSale/HouseForSale';
import Pricing from '../Pricing/Pricing';
import TopBanner from '../TopBanner/TopBanner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <About></About>
            <HouseForSale></HouseForSale>
            <Pricing></Pricing>
            <WhyChooseUs></WhyChooseUs>
            <GetInTouch></GetInTouch>
            <Footer></Footer>
        </div>
    );
};

export default Home;