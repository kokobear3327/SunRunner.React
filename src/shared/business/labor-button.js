import './labor-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function LaborButton() {

    return (
        <div class="labor-button-parent">
        <Link to="/Labor">
        <button className="labor-button">Labor</button>
        </Link>
        </div>
    );
  }