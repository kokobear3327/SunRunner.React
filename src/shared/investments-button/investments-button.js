import React from 'react'
import { Link } from "react-router-dom";
import './investments-button.css';

export default function InvestmentsButton() {

    return (
        <div className="investments-button-parent">
        <Link to="/Investments">
        <button className="investments-button">Investments</button>
        </Link>
        </div>
    );
  }
  