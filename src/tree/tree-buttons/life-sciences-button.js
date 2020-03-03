import './life-sciences-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function LifeSciencesButton() {

    return (
        <div className="life-sciences-parent">
        <Link to="/LifeSciences">
        <button className="life-sciences-button">Life Sciences</button>
        </Link>
        </div>
    );
  }