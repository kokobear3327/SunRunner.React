import './wall-one-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function WallOneButton() {

    return (
        <div class="business-wall-one-button-parent">
        <Link to="/BusinessWallOne">
        <button className="business-wall-one-button">Wall 1</button>
        </Link>
        </div>
    );
  }