import React from 'react';
import ProductCard from '../ProductCard';
import './produtop.scss';

function ProductTop() {
    return (
        <div className="product-wrapper">
            <ProductCard ind="1"/>
            <ProductCard ind="2"/>
            <ProductCard ind="3"/>
        </div>
    );
}

export default ProductTop;