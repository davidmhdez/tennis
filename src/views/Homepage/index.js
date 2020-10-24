import React from 'react';
import AccesoriesSection from './components/AccesoriesSection';
import Banner from './components/Banner';
import MainHero from './components/MainHero';
import ProductSection from './components/ProductSection';

function Homepage() {
    return (
        <>
            <MainHero/>
            <AccesoriesSection/>
            <ProductSection/>
            <Banner/>
        </>
    );
}

export default Homepage;