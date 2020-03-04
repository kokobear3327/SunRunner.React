import './phone-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function PhoneButton() {

    return (
        <div class="phone-button-parent">
        <button className="phone-button">Phone</button>
        </div>
    );
  }