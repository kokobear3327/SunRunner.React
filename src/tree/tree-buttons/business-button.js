import './business-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function BusinessButton() {

    return (
        <div className="business-parent">
        <Link to="/BusinessWallTwo">
        <button className="business-button">Business</button>
        </Link>
        </div>
    );
  }