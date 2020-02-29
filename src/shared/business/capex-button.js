import './capex-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function CapexButton() {

    return (
        <div class="capex-button-parent">
        <Link to="/Capex">
        <button className="capex-button">Capex</button>
        </Link>
        </div>
    );
  }