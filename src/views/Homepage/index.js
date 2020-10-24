import React from 'react';
import AccesoriesSection from './components/AccesoriesSection';
import MainHero from './components/MainHero';
import ProductSection from './components/ProductSection';

function Homepage() {
    return (
        <>
            <MainHero/>
            <AccesoriesSection/>
            <ProductSection/>
        </>
    );
}

export default Homepage;