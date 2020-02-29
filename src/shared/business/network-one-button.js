import './network-one-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function NetworkOneButton() {

    return (
        <div class="business-network-one-button-parent">
        <Link to="/BusinessNetworkOne">
        <button className="business-network-one-button">Network 1</button>
        </Link>
        </div>
    );
  }