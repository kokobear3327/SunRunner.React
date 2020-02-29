
import './economics-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function EconomicsButton() {

    return (
        <div class="economics-parent">
        <Link to="/Economics">
        <button className="economics-button">Economics</button>
        </Link>
        </div>
    );
  }