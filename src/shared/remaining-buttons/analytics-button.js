import './analytics-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function AnalyticsButton() {

    return (
        <div class="analytics-button-parent">
        <Link to="/Analytics">
        <button className="analytics-button">Analytics</button>
        </Link>
        </div>
    );
  }