import './services-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ServicesButton() {

    return (
        <div class="services-button-parent">
        <Link to="/Services">
        <button className="services-button">Services</button>
        </Link>
        </div>
    );
  }