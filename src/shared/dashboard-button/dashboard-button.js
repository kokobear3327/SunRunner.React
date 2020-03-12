import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { mousedOver, mousedOff } from '../../actions';


export default function DashboardButton() {
    const dispatch = useDispatch();
    const dashboard = "dashboard";
    let inputValue;
    const setValue = () => {
        let inputForDashboard = document.querySelector('.input-dashboard');
        inputForDashboard.addEventListener("keydown", event => {
            if (event.keyCode === 13) {
                let dashboardButton = document.querySelector('.dashboard-button');
                let inputForDashboard = document.querySelector('.input-dashboard');
                dashboardButton.innerHTML = inputForDashboard.value;
                inputForDashboard.style.display = "none"
            }
            // do something
          });
    }
    useEffect(() => {
        let dashboardButton = document.querySelector(".dashboard-button")
        dashboardButton.addEventListener("mouseover", () => {
        dashboardButton.classList.add("dashboard-hovered")
        dispatch(mousedOver(dashboard))})
        dashboardButton.addEventListener("mouseleave", () => {
        dashboardButton.classList.remove("dashboard-hovered")
        dispatch(mousedOff())
    })
      });
    const clickDashboard = () => {
        // We want conditional logic where if its a normall call, its to news, if other it can be balllon wrench:
        // First check if the global balloon wrench variable has change
        let dashboardButton = document.querySelector('.dashboard-button');
        dashboardButton.classList.remove("dashboard-hovered")
        let inputForDashboard = document.querySelector('.input-dashboard');
        inputForDashboard.style.display = "flex";
    }
    
    return (
        <div className="dashboard-button-container">
        <input type="text" value={inputValue} onChange={setValue} autoFocus minLength="4" maxLength="8" className="input-dashboard"></input>
        <h1 onClick={ clickDashboard } className="dashboard-button">Dashboard</h1>
        <style jsx>
        {

`
.dashboard-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
}

.dashboard-button {
    font-family: Montserrat;
    z-index:62;
    font-size: 25px;
    padding-left: 22px;
    position: relative;
    right: 164px;
    bottom: 2020px;
    background-color: transparent;
    color: white;
    cursor: none;
    border:black;
    background: linear-gradient(to bottom, rgb(212,212,245), rgb(47, 164, 231));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: transform 1s;
    pointer-events: all;
    transition-timing-function: ease-out;
}

.dashboard-hovered {
    cursor: none;
    transform: scale(1.23);
    pointer-events: all;
}


.input-dashboard {
    display: none;

    position: absolute;
    bottom: 2153px;
    left: 667px;

}
.input-dashboard:focus {
    color:black;
}
`
        }
        </style>
        </div>
    );
  }
  
