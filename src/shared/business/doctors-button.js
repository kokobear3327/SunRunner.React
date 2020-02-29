import './doctors-button.css';
import React from 'react'
import { Link } from "react-router-dom";


// So you would add an onclick event where the router would take you to the route specified. 

function DoctorsButton() {
    return (
        <div class="business-doctors-button-container">
        <Link to="/BusinessDoctors">
        <button className="business-doctors-button">Doctors</button>
        </Link>
        </div>
    );
  }
  
  export default DoctorsButton;