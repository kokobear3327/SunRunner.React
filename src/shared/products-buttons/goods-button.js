import './goods-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function GoodsButton() {

    return (
        <div class="goods-button-parent">
        <Link to="/Goods">
        <button className="goods-button">Goods</button>
        </Link>
        </div>
    );
  }