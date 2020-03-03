import './physical-sciences-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function PhysicalSciencesButton() {

    return (
        <div className="physical-sciences-parent">
        <Link to="/PhysicalSciences">
        <button className="physical-sciences-button">Physical Sciences</button>
        </Link>
        </div>
    );
  }