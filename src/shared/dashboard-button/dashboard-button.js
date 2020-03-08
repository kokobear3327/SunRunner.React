import './dashboard-button.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { mousedOverDashboard } from '../../actions';


// So you would add an onclick event where the router would take you to the route specified. 

function DashboardButton() {


        const worky = useSelector(state => state.isDashboard)
        console.log("dashboard:" + worky);
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