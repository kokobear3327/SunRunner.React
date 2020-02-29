import './research-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ResearchButton() {

    return (
        <div class="business-research-button-parent">
        <Link to="/Research">
        <button className="business-research-button">Research</button>
        </Link>
        </div>
    );
  }