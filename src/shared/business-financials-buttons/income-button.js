import './income-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function IncomeButton() {

    return (
        <div class="business-income-button-parent">
        <Link to="/BusinessIncome">
        <button className="business-income-button">Income</button>
        </Link>
        </div>
    );
  }