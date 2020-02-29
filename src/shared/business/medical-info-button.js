import './medical-info-button.css';
import React from 'react'
import { Link } from "react-router-dom";


// So you would add an onclick event where the router would take you to the route specified. 

function MedicalInfoButton() {
    return (
        <div class="business-medical-info-container">
        <Link to="/Business-Medical-Info">
        <button className="business-medical-info">Medical Info</button>
        </Link>
        </div>
    );
  }
  
  export default MedicalInfoButton;