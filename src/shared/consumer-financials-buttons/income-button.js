import './income-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ComposeButton() {

    return (
        <div class="income-button-parent">
        <Link to="/Income">
        <button className="income-button">Income</button>
        </Link>
        </div>
    );
  }