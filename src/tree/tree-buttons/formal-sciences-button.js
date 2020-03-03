import './formal-sciences-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function FormalSciencesButton() {

    return (
        <div className="formal-sciences-parent">
        <Link to="/FormalSciences">
        <button className="formal-sciences-button">Formal Sciences</button>
        </Link>
        </div>
    );
  }