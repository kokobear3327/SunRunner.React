import './dashboard-button.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { mousedOverDashboard } from '../../actions';

function DashboardButton() {

        const dispatch = useDispatch();
    
        useEffect(() => {
        let dashboardButton = document.querySelector(".dashboard-button")
        dashboardButton.addEventListener("mouseover", () => {
        dashboardButton.classList.add("dashboard-hovered")
        dispatch(mousedOverDashboard());
        })
    
        
          });
    return (
        <div className="dashboard-button-container">
        <button className="dashboard-button">Dashboard</button>
        </div>
    );
  }
  
  export default DashboardButton;