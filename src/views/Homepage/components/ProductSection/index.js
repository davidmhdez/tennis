import React from 'react';
import ProductTop from './components/ProductTop';
import Slider from './components/Slider';
import './productsectionstyles.scss';

function ProductSection() {
    return (
        <section className="product-section">
            <Slider/>
            <ProductTop/>
        </section>
    );
}

export default ProductSection;