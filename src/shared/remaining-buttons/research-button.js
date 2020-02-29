import './research-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ResearchButton() {

    return (
        <div class="research-button-parent">
        <Link to="/Research">
        <button className="research-button">Research</button>
        </Link>
        </div>
    );
  }