import './phone-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function PhoneButton() {

    return (
        <div class="business-phone-button-parent">
        <Link to="/BusinessPhone">
        <button className="business-phone-button">Phone</button>
        </Link>
        </div>
    );
  }