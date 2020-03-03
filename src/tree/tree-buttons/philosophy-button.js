import './philosophy-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function PhilosophyButton() {

    return (
        <div className="philosophy-parent">
        <Link to="/Philosophy">
        <button className="philosophy-button">Philosophy</button>
        </Link>
        </div>
    );
  }