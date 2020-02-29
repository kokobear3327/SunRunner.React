import './goods-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function BusinessGoodsButton() {

    return (
        <div class="business-goods-button-parent">
        <Link to="/BusinessGoods">
        <button className="business-goods-button">Goods</button>
        </Link>
        </div>
    );
  }