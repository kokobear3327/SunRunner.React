import './dashboard-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function DashboardButton() {

    return (
        <div class="dashboard-button-parent">
        <Link to="/Dashboard">
        <button className="dashboard-button">Dashboard</button>
        </Link>
        </div>
    );
  }