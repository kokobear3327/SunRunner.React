
import './wall-two-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function WallTwoButton() {

    return (
        <div class="business-wall-two-button-parent">
        <Link to="/BusinessWallTwo">
        <button className="business-wall-two-button">Wall 2</button>
        </Link>
        </div>
    );
  }