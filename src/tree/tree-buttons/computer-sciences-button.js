import './computer-sciences-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ComputerSciencesButton() {

    return (
        <div class="computer-sciences-parent">
        <Link to="/ComputerSciences">
        <button className="computer-sciences-button">Computer Sciences</button>
        </Link>
        </div>
    );
  }