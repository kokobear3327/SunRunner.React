import './analytics-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function AnalyticsButton() {

    return (
        <div class="business-analytics-button-parent">
        <Link to="/BusinessAnalytics">
        <button className="business-analytics-button">Analytics</button>
        </Link>
        </div>
    );
  }