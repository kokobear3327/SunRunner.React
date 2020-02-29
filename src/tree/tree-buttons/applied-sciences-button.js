import './applied-sciences-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function AppliedSciencesButton() {

    return (
        <div class="applied-sciences-parent">
        <Link to="/AppliedSciences">
        <button className="applied-sciences-button">Applied Sciences</button>
        </Link>
        </div>
    );
  }