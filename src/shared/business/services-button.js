import './services-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function BusinessServicesButton() {

    return (
        <div class="business-services-button-parent">
        <Link to="/Services">
        <button className="business-services-button">Services</button>
        </Link>
        </div>
    );
  }