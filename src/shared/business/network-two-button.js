import './network-two-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function NetworkTwoButton() {

    return (
        <div class="business-network-two-button-parent">
        <Link to="/BusinessNetworktwo">
        <button className="business-network-two-button">Network 2</button>
        </Link>
        </div>
    );
  }