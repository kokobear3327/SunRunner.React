import './balance-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function BalanceButton() {

    return (
        <div class="business-balance-button-parent">
        <Link to="/BusinessBalance">
        <button className="business-balance-button">Balance</button>
        </Link>
        </div>
    );
  }