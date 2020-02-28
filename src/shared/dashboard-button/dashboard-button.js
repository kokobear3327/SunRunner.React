import './dashboard-button.css';
import React from 'react'
import { Link } from "react-router-dom";


// So you would add an onclick event where the router would take you to the route specified. 

function DashboardButton() {
    return (
        <div class="dashboard-button-container">
        <Link to="/Dashboard">
        <button className="dashboard-button">Dashboard</button>
        </Link>
        </div>
    );
  }
  
  export default DashboardButton;