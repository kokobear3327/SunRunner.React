import './dashboard-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function DashboardButton() {

    return (
        <div class="business-dashboard-button-parent">
        <Link to="/BusinessDashboard">
        <button className="business-dashboard-button">Dashboard</button>
        </Link>
        </div>
    );
  }