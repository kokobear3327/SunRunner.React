import './goods-button.css';
import GoodsButton from './goods-button';
import ServicesButton from './services-button';
import React from 'react'

export default function ProductsButtons() {

    return (
        <div class="goods-button-parent">
            <GoodsButton></GoodsButton>
            <ServicesButton></ServicesButton>
        </div>
    );
  }