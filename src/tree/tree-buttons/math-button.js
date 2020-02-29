import './math-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function MathButton() {

    return (
        <div class="math-parent">
        <Link to="/Math">
        <button className="math-button">Math</button>
        </Link>
        </div>
    );
  }