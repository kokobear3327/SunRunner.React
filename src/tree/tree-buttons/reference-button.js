import './reference-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ReferenceButton() {

    return (
        <div className="reference-parent">
        <Link to="/Reference">
        <button className="reference-button">Reference</button>
        </Link>
        </div>
    );
  }