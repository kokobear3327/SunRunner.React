import './dashboard-button.css';
import React from 'react'


// So you would add an onclick event where the router would take you to the route specified. 

function DashboardButton() {
    return (
        <div className="dashboard-button-container">
        <button className="dashboard-button">Dashboard</button>
        </div>
    );
  }
  
  export default DashboardButton;